import translate from "./translateClient"; // Cliente de Google Translate
import fs from "fs";
import path from "path";

// Configuración de idiomas
const BASE_LANGUAGE = "en"; // Idioma base
const SUPPORTED_LANGUAGES = ["es", "fr"]; // Idiomas soportados

// Ruta de las traducciones
const localesPath = path.join(process.cwd(), "locales");

async function generateTranslations() {
  try {
    const baseFilePath = path.join(localesPath, BASE_LANGUAGE, "common.json");

    // Leer el archivo base (en inglés)
    const baseContent = JSON.parse(fs.readFileSync(baseFilePath, "utf-8"));

    // Traducir a cada idioma
    for (const lang of SUPPORTED_LANGUAGES) {
      const translatedContent = {};

      for (const key in baseContent) {
        const text = baseContent[key];

        // Llamada a Google Translate para traducir
        const [translation] = await translate.translate(text, lang);
        translatedContent[key] = translation;
      }

      // Guardar el archivo traducido
      const langPath = path.join(localesPath, lang);
      if (!fs.existsSync(langPath)) {
        fs.mkdirSync(langPath, { recursive: true });
      }

      fs.writeFileSync(
        path.join(langPath, "common.json"),
        JSON.stringify(translatedContent, null, 2),
        "utf-8"
      );

      console.log(`Traducción generada para ${lang}`);
    }
  } catch (error) {
    console.error("Error generando traducciones:", error);
  }
}

generateTranslations();
