const translate = require("../../util/translateCliente");

export default async function handler(req, res) {
  const { text, targetLanguage } = req.body;

  try {
    const [translation] = await translate.translate(text, targetLanguage);
    res.status(200).json({ translation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error translating text" });
  }
}
