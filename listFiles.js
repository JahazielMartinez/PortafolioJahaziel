const admin = require("firebase-admin");

// Carga tu archivo de credenciales de Firebase
const serviceAccount = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "webdesignoficial-5dcdd.appspot.com", // Cambia esto por tu bucket
});

const bucket = admin.storage().bucket();

async function listFiles(prefix = "") {
  try {
    const [files] = await bucket.getFiles({ prefix });
    files.forEach((file) => {
      console.log(file.name); // Nombre completo del archivo
    });

    console.log(`\nNúmero total de archivos: ${files.length}`);
  } catch (error) {
    console.error("Error al listar archivos:", error);
  }
}

// Llama a la función especificando la carpeta raíz
listFiles("Certificaciones/");
