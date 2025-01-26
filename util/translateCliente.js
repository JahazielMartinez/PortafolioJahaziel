const { Translate } = require("@google-cloud/translate").v2;

const keyFilePath = "./util/jdml-448601-3555ff0480ac.json"; // Ruta al archivo JSON de credenciales

const translate = new Translate({
  keyFilename: keyFilePath,
});

console.log('Archivo encontrado')

module.exports = translate;
