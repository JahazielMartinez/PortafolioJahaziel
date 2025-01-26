import { ref, set, push } from "firebase/database";
import { database } from "./firebaseConfig"; // Ajusta la ruta según tu estructura

async function saveCertificationToDatabase(certification) {
  try {
    const certificationRef = push(ref(database, "certifications"));
    await set(certificationRef, certification);
    console.log("Certificación guardada en Firebase:", certification);
  } catch (error) {
    console.error("Error al guardar en Firebase:", error);
  }
}

export default saveCertificationToDatabase;
