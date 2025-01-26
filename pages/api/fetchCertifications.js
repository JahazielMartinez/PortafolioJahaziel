import vision from "@google-cloud/vision";
import { Storage } from "@google-cloud/storage";
import path from "path";
import openai from "../../util/openaiClient"; // Asegúrate de que esta ruta sea correcta

const keyFilename = path.resolve("util/jdml-448601-eddd085c3e88.json");
const bucketName = "webdesignoficial-5dcdd";
const prefix = "Certificaciones/";

const storage = new Storage({ keyFilename });
const client = new vision.ImageAnnotatorClient({ keyFilename });

function extractDate(text) {
  const datePatterns = [
    /\b(\d{4})\b/, // Año solo (e.g., 2022)
    /(\b\w+\b)\s+(\d{4})/, // Mes y año (e.g., Enero 2022)
    /(\d{1,2})\/(\d{4})/, // Mes/Año (e.g., 01/2022)
  ];

  for (const pattern of datePatterns) {
    const match = text.match(pattern);
    if (match) {
      if (match[1] && match[2]) {
        // Formato mes/año o nombre del mes/año
        const month = isNaN(match[1]) ? new Date(`${match[1]} 1, 2000`).getMonth() + 1 : parseInt(match[1], 10);
        const year = parseInt(match[2], 10);
        return `${year}-${month.toString().padStart(2, "0")}-01`;
      } else if (match[1]) {
        // Solo año
        return `${match[1]}-01-01`;
      }
    }
  }
  return "Unknown";
}

async function extractTitleAndDateWithGPT4(text) {
  try {
    console.log("Enviando texto a GPT-4:", text);

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an AI that analyzes text extracted from certificates. Your job is to extract:
          1. The title of the course or certification.
          2. The date it was granted or completed.

          Return the result in the following JSON format:
          {
            "title": "<Title>",
            "date": "<Date>"
          }`,
        },
        { role: "user", content: text },
      ],
    });

    const gptOutput = response.choices[0]?.message?.content?.trim();

    // Parseamos el resultado JSON devuelto por GPT-4
    const parsedOutput = JSON.parse(gptOutput);

    return {
      title: parsedOutput.title || "No title available",
      date: parsedOutput.date || "Unknown",
    };
  } catch (error) {
    console.error("Error with GPT-4:", error);
    return { title: "No title available", date: "Unknown" };
  }
}

async function listAndAnalyzeCertifications() {
  try {
    console.log(`Listando imágenes en el bucket: ${bucketName}`);
    const [files] = await storage.bucket(bucketName).getFiles({ prefix });

    if (!files.length) {
      console.error("No se encontraron archivos en la carpeta especificada.");
      return [];
    }

    console.log(`Archivos encontrados: ${files.length}`);

    const results = [];
    for (const file of files) {
      console.log(`Procesando: ${file.name}`);

      const [result] = await client.textDetection(`gs://${bucketName}/${file.name}`);
      const detections = result.textAnnotations;

      if (detections.length) {
        const extractedText = detections[0].description; // Texto completo detectado
        const { title, date } = await extractTitleAndDateWithGPT4(extractedText); // GPT-4 extrae título y fecha

        results.push({
          name: file.name,
          url: `https://storage.googleapis.com/${bucketName}/${file.name}`,
          category: "Unknown", // Ajustar según sea necesario
          date: date, // Fecha extraída por GPT-4
          title: title, // Título extraído por GPT-4
        });

        console.log(`Texto completo: ${extractedText}`);
        console.log(`Título extraído: ${title}`);
        console.log(`Fecha extraída: ${date}`);
      } else {
        console.warn(`No se detectó texto en: ${file.name}`);
        results.push({
          name: file.name,
          url: `https://storage.googleapis.com/${bucketName}/${file.name}`,
          category: "Unknown",
          date: "Unknown",
          title: "No title available",
        });
      }
    }

    return results;
  } catch (error) {
    console.error("Error al configurar o procesar:", error);
    throw new Error("Error processing images");
  }
}

// Exporta como una función de API de Next.js
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const certifications = await listAndAnalyzeCertifications();
      certifications.sort((a, b) => {
        if (a.date === "Unknown") return 1;
        if (b.date === "Unknown") return -1;
        return new Date(a.date) - new Date(b.date);
      });
      res.status(200).json(certifications);
    } catch (error) {
      res.status(500).json({ error: "Error processing images", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}