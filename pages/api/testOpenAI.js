import openai from "../../util/openaiClient";

export default async function handler(req, res) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "Eres un asistente que devuelve saludos." },
        { role: "user", content: "Di hola al mundo" },
      ],
    });

    const reply = response.data.choices[0]?.message?.content;
    res.status(200).json({ message: reply });
  } catch (error) {
    console.error("Error con GPT-4:", error.message);
    res.status(500).json({ error: error.message });
  }
}
