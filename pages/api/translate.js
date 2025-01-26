import translate from "../../util/translateCliente"; // Ruta relativa al archivo translateClient.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { text, targetLanguage } = req.body;

    try {
      const [translation] = await translate.translate(text, targetLanguage);
      res.status(200).json({ translatedText: translation });
    } catch (error) {
      console.error("Translation error:", error);
      res.status(500).json({ error: "Translation failed", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
