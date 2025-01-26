import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

// Función para extraer el año desde el nombre del archivo
const extractYearFromFileName = (fileName) => {
  // Expresión regular para capturar años (formato YYYY)
  const yearRegex = /\b(\d{4})\b/; // Busca un año con 4 dígitos
  const match = fileName.match(yearRegex);

  if (match) {
    return parseInt(match[1], 10); // Devuelve el año como número
  }

  // Si no se encuentra un año válido, usar el año actual
  return new Date().getFullYear();
};

// Función recursiva para obtener archivos de todas las subcarpetas en Storage
const fetchFilesRecursively = async (folderRef) => {
  let allFiles = [];

  const result = await listAll(folderRef);

  // Obtener los archivos de la carpeta actual
  const filesInCurrentFolder = await Promise.all(
    result.items.map(async (item) => {
      const url = await getDownloadURL(item);

      // Extraer el año desde el nombre
      const name = item.name;
      const year = extractYearFromFileName(name);

      // Determinar categoría según palabras clave en el nombre del archivo
      const category = name.toLowerCase().includes("ux")
        ? "UX/UI"
        : name.toLowerCase().includes("leadership")
        ? "Leadership"
        : name.toLowerCase().includes("english")
        ? "English"
        : "General";

      return {
        name,
        url,
        year, // Añade el año
        category,
      };
    })
  );

  // Agregar los archivos de la carpeta actual al arreglo
  allFiles = [...allFiles, ...filesInCurrentFolder];

  // Recorrer las subcarpetas y llamar recursivamente
  for (const subFolder of result.prefixes) {
    const filesInSubFolder = await fetchFilesRecursively(subFolder);
    allFiles = [...allFiles, ...filesInSubFolder];
  }

  return allFiles;
};

// Función para obtener certificaciones desde Firebase Storage
export const getCertifications = async () => {
  try {
    // Referencia a la carpeta principal "Certificaciones"
    const certificationsRef = ref(storage, "Certificaciones");

    // Obtener todos los archivos de todas las subcarpetas recursivamente
    const allCertifications = await fetchFilesRecursively(certificationsRef);

    return allCertifications;
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return [];
  }
};
