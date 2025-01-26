const admin = require("firebase-admin");
const analyzeImage = require("./analyzeImage");
const path = require("path");
const fs = require("fs");

// Inicializa Firebase Admin SDK
const serviceAccount = require("./jdml-448601-590ad229d2aa.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "jdml-448601.appspot.com", // Cambia esto por tu bucket
  });
}

const bucket = admin.storage().bucket();
const firestore = admin.firestore();

async function uploadAndAnalyzeImage(localImagePath) {
  try {
    const fileName = path.basename(localImagePath);
    const storagePath = `certifications/${fileName}`;

    // Sube la imagen a Firebase Storage
    await bucket.upload(localImagePath, {
      destination: storagePath,
    });
    console.log(`Imagen subida a: ${storagePath}`);

    // Analiza la imagen
    const analysisResult = await analyzeImage(localImagePath);

    // Guarda los datos en Firestore
    await firestore.collection("certifications").add({
      name: fileName,
      imageUrl: `https://storage.googleapis.com/${bucket.name}/${storagePath}`,
      text: analysisResult.text,
      date: analysisResult.date,
      category: analysisResult.category,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log("Certificación guardada en Firestore");
  } catch (error) {
    console.error("Error al subir y analizar la imagen:", error.message);
  }
}

// Ejecuta la función con un archivo de prueba
const testImage = "./images/02.png"; // Cambia esto por la ruta de tu imagen
uploadAndAnalyzeImage(testImage);
