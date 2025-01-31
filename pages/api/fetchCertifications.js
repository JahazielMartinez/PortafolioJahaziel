import { ImageAnnotatorClient } from "@google-cloud/vision";
import { Storage } from "@google-cloud/storage";
import path from "path";

// Configuración de Google Cloud
const keyFilename = path.resolve("util/jdml-448601-eddd085c3e88.json");
const client = new ImageAnnotatorClient({ keyFilename });
const storage = new Storage({ keyFilename });
const bucketName = "webdesignoficial-5dcdd";
const prefix = "Certificaciones/";

// Lista de palabras a excluir
const EXCLUDED_KEYWORDS = [
  "Platzi", "Crehana", "Linkedin", "Certifica a", "Por participar y aprobar el",
  "Certificación", "Curso", "Constancia de participación", "Certifies that",
  "Has participated and completed", "Otorgado a", "Dictado por", "Entregado en",
  "Certificación de aprobación online", "Aprobado el", "de"
];

// Función para limpiar texto eliminando palabras no deseadas
function cleanText(text) {
  let cleanedText = text;
  EXCLUDED_KEYWORDS.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    cleanedText = cleanedText.replace(regex, "").trim();
  });
  return cleanedText.length > 0 ? cleanedText : "Título no disponible";
}

// Función específica para extraer datos de certificaciones de Platzi
function extractPlatziCertificateDetails(text) {
  console.log("Detectando formato Platzi en texto:", text);

  // Extraer el título en formatos "CURSO DE [NOMBRE]" o "INTRODUCCIÓN A [NOMBRE]"
  let titleMatch = text.match(/CURSO DE\s*(.*?)\s*(?:\n|$)/i);
  if (!titleMatch) {
    titleMatch = text.match(/INTRODUCCIÓN A\s*(.*?)\s*(?:\n|$)/i);
  }
  const extractedTitle = titleMatch ? cleanText(titleMatch[1]) : "Título no disponible";

  // Extraer la fecha en formato "Aprobado el 6 de DICIEMBRE de 2022"
  let dateMatch = text.match(/Aprobado el\s*\d{1,2}\s*de\s*[A-Za-z]+\s*(\d{4})/i);
  const extractedDate = dateMatch ? dateMatch[1] : "Fecha no disponible";

  // Extraer categoría según palabras clave en el título
  let extractedCategory = "Otra";
  if (/Finanzas|Financiera/i.test(extractedTitle)) {
    extractedCategory = "Finanzas";
  }
  if (/Git|GitHub/i.test(extractedTitle)) {
    extractedCategory = "Desarrollo";
  }

  return {
    title: extractedTitle,
    date: extractedDate,
    category: extractedCategory,
  };
}

// Función general para extraer detalles de cualquier certificación
function extractDetailsFromText(text) {
  console.log("Texto extraído:", text); // Depuración en consola

  // Si el texto detectado coincide con el patrón de Platzi, usa la función específica
  if (/CURSO DE|INTRODUCCIÓN A|Aprobado el/i.test(text)) {
    return extractPlatziCertificateDetails(text);
  }

  // Extraer título de otras certificaciones
  const titleMatch = text.match(/(?:completado el curso|por haber completado el curso)\s*(.*?)\s*(?:\n|$)/i);
  const extractedTitle = titleMatch ? cleanText(titleMatch[1]) : "Título no disponible";

  // Extraer la fecha
  const dateMatch = text.match(/\b(19[9][0-9]|20[0-2][0-4])\b/);
  const extractedDate = dateMatch ? dateMatch[0] : "Fecha no disponible";

  // Extraer categoría según palabras clave
  const categoryMatch = text.match(/(Liderazgo|Desarrollo|UX-UI|Diseño|Inglés|Marketing|Redes|Video|UX|UI|Finanzas)/i);
  const extractedCategory = categoryMatch ? categoryMatch[0] : "Otra";

  return {
    title: extractedTitle,
    date: extractedDate,
    category: extractedCategory,
  };
}

async function listAndAnalyzeCertifications() {
  try {
    const [files] = await storage.bucket(bucketName).getFiles({ prefix });
    let results = [];

    for (const file of files) {
      const [result] = await client.textDetection(`gs://${bucketName}/${file.name}`);
      const detections = result.textAnnotations;

      if (detections?.length) {
        const extractedText = detections[0].description;

        const { title, date, category } = extractDetailsFromText(extractedText);

        results.push({
          name: file.name,
          url: `https://storage.googleapis.com/${bucketName}/${file.name}`,
          category,
          date,
          title,
        });

        console.log("Procesado:", { title, date, category });
      }
    }

    // Ordenar por fecha (más recientes primero)
    results.sort((a, b) => {
      if (a.date === "Fecha no disponible") return 1;
      if (b.date === "Fecha no disponible") return -1;
      return parseInt(b.date) - parseInt(a.date);
    });

    return results;
  } catch (error) {
    console.error("Error procesando certificaciones:", error);
    return [];
  }
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const certifications = await listAndAnalyzeCertifications();
      res.status(200).json(certifications);
    } catch (error) {
      res.status(500).json({ error: "Error interno" });
    }
  } else {
    res.status(405).end();
  }
}
