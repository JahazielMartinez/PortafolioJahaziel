import axios from "axios";

// Llama al endpoint `/api/analyze-certifications` para analizar la imagen
const analyzeImage = async (imageUrl) => {
  try {
    const response = await axios.post("/api/analyze-certifications", { imageUrl });
    return response.data; // Devuelve el análisis de la imagen
  } catch (error) {
    console.error("Error analizando la imagen:", error.message);
    return { date: null }; // Si falla, retorna un valor predeterminado
  }
};

export default analyzeImage;
