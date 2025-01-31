import { ImageAnnotatorClient } from "@google-cloud/vision";

const client = new ImageAnnotatorClient({
  keyFilename: "./jdml-448601-590ad229d2aa.json", // Asegúrate de que esta ruta sea correcta
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { imageUrl } = req.body;

  if (!imageUrl || typeof imageUrl !== "string") {
    return res.status(400).json({ error: "Invalid or missing image URL." });
  }

  try {
    console.log(`Analizando imagen: ${imageUrl}`);
    const [result] = await client.textDetection(imageUrl);
    const detections = result.textAnnotations;

    if (!detections || detections.length === 0) {
      return res.status(200).json({ date: "Unknown", text: "No text detected" });
    }

    // Extraer el texto detectado
    const detectedText = detections[0].description.trim();
    console.log("Texto detectado:", detectedText);

    // Buscar un año válido en el texto
    const dateMatch = detectedText.match(/\b(19[9][0-9]|20[0-2][0-4])\b/);
    const detectedDate = dateMatch ? dateMatch[0] : "Fecha no disponible";

    res.status(200).json({
      date: detectedDate,
      text: detectedText.replace(/\n/g, " "), // Reemplaza saltos de línea para mejorar la legibilidad
    });
  } catch (error) {
    console.error("Error al analizar la imagen:", error);
    res.status(500).json({ error: "Error analyzing image", details: error.message });
  }
}
