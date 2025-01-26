const vision = require("@google-cloud/vision");

// Crea un cliente de Google Cloud Vision
const client = new vision.ImageAnnotatorClient({
  keyFilename: "./jdml-448601-590ad229d2aa.json", // Asegúrate de que esta ruta sea correcta y que el archivo exista
});

module.exports = client; // Exporta el cliente para usarlo en otros módulos
