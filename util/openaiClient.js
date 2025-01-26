import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Cargamos la clave desde el entorno
});

export default openai;
