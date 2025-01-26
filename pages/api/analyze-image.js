import { ImageAnnotatorClient } from "@google-cloud/vision";

const client = new ImageAnnotatorClient({
  keyFilename: "./jdml-448601-590ad229d2aa.json", // Ruta al archivo de credenciales
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { imageUrl } = req.body;PUTa 

  if (!imageUrl) {
    return res.status(400).json({ error: "No image URL provided." });
  }

  try {
    const [result] = await client.textDetection(imageUrl);
    const detections = result.textAnnotations;

    if (!detections || detections.length === 0) {
      return res.status(200).json({ date: "Unknown", text: "" });
    }

    // Extraer fecha de detecciones
    const detectedText = detections[0].description;
    const dateMatch = detectedText.match(/\b\d{4}\b/); // Busca años en el texto

    res.status(200).json({
      date: dateMatch ? dateMatch[0] : "Unknown",
      text: detectedText,
    });
  } catch (error) {
    console.error("Error analyzing image:", error);
    res.status(500).json({ error: "Error analyzing image." });
  }
}
