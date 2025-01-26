const admin = require("firebase-admin");

// Inicializa Firebase Admin SDK
if (!admin.apps.length) {
  const serviceAccount = require("/safe-directory/jdml-448601-590ad229d2aa.json"); // Cambia la ruta aquí
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const firestore = admin.firestore();

async function fetchCertifications() {
  try {
    const certificationsRef = firestore.collection("certifications");
    const snapshot = await certificationsRef.orderBy("date", "desc").get();

    if (snapshot.empty) {
      console.log("No se encontraron certificaciones.");
      return [];
    }

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error al obtener certificaciones:", error.message);
    throw error;
  }
}

module.exports = fetchCertifications;
