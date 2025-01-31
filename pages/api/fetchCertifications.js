import { ImageAnnotatorClient } from "@google-cloud/vision";
import { Storage } from "@google-cloud/storage";
import fs from "fs";
import path from "path";

// Configuración de Google Cloud
const keyFilename = path.resolve("util/jdml-448601-eddd085c3e88.json");
const client = new ImageAnnotatorClient({ keyFilename });
const storage = new Storage({ keyFilename });
const bucketName = "webdesignoficial-5dcdd";
const prefix = "Certificaciones/";
const jsonFilePath = path.resolve("public/certifications.json"); // Guarda el JSON aquí

// Clave secreta para regenerar el JSON manualmente
const ADMIN_KEY = "jdml45";

// Lista de palabras a excluir
const EXCLUDED_KEYWORDS = [
  "Platzi", "Crehana", "Linkedin", "Certifica a", "Por participar y aprobar el",
  "Certificación", "Curso", "Constancia de participación", "Certifies that",
  "Has participated and completed", "Otorgado a", "Dictado por", "Entregado en"
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

// Función para extraer detalles
function extractDetailsFromText(text) {
  console.log("Texto extraído:", text);

  // Extraer título del curso
  const titleMatch = text.match(/(?:completado el curso|por haber completado el curso)\s*(.*?)\s*(?:\n|$)/i);
  const extractedTitle = titleMatch ? cleanText(titleMatch[1]) : "Título no disponible";

  // Extraer fecha
  const dateMatch = text.match(/\b(19[9][0-9]|20[0-2][0-4])\b/);
  const extractedDate = dateMatch ? dateMatch[0] : "Fecha no disponible";

  // Extraer categoría según palabras clave
  const categoryMatch = text.match(/(Liderazgo|Desarrollo|UX-UI|Diseño|Inglés|Marketing|Redes|Video|UX|UI)/i);
  const extractedCategory = categoryMatch ? categoryMatch[0] : "Otra";

  return {
    title: extractedTitle,
    date: extractedDate,
    category: extractedCategory,
  };
}

// Función para listar y analizar certificaciones
async function listAndAnalyzeCertifications() {
  try {
    const [files] = await storage.bucket(bucketName).getFiles({ prefix });
    let results = [];

    for (const file of files) {
      if (!file.name.match(/\.(jpg|jpeg|png)$/)) continue; // Ignorar archivos no válidos

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

    // Guardar JSON en `public/`
    fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2));

    return results;
  } catch (error) {
    console.error("Error procesando certificaciones:", error);
    return [];
  }
}

// API para regenerar el JSON (solo accesible para admins)
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  // Verificar si el usuario tiene permisos de admin
  const adminKey = req.headers.authorization;
  if (adminKey !== ADMIN_KEY) {
    return res.status(403).json({ error: "No autorizado" });
  }

  try {
    const certifications = await listAndAnalyzeCertifications();
    res.status(200).json({ message: "JSON generado correctamente", certifications });
  } catch (error) {
    res.status(500).json({ error: "Error interno" });
  }
}
