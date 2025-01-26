const vision = require('@google-cloud/vision');
const { Storage } = require('@google-cloud/storage');

// Ruta al archivo JSON de credenciales
const keyFilePath = "./util/jdml-448601-eddd085c3e88.json";

// Configuración del cliente de Vision API
const visionClient = new vision.ImageAnnotatorClient({
  keyFilename: keyFilePath,
});

// Configuración del cliente de Google Cloud Storage
const storage = new Storage({
  keyFilename: keyFilePath,
});

async function listAndAnalyzeImages(bucketName) {
  console.log(`Listando imágenes en el bucket: ${bucketName}`);
  try {
    // Obtiene todos los archivos en el bucket
    const [files] = await storage.bucket(bucketName).getFiles();

    if (!files.length) {
      console.log('No se encontraron archivos en el bucket.');
      return;
    }

    console.log(`Archivos encontrados: ${files.length}`);
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file.name}`);
    });

    // Procesa cada archivo con la Vision API
    for (const file of files) {
      console.log(`Procesando: ${file.name}`);
      const [result] = await visionClient.textDetection(`gs://${bucketName}/${file.name}`);
      const detections = result.textAnnotations;

      console.log('Texto extraído:', detections.length ? detections[0].description : 'No se detectó texto');
    }
  } catch (error) {
    console.error('Error al procesar las imágenes:', error);
  }
}

// Cambia el nombre del bucket si es necesario
const bucketName = 'webdesignoficial-5dcdd';
listAndAnalyzeImages(bucketName);
