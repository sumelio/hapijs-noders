const Hapi = require('hapi');
const routes = require("./routes"); //Agregamos esta línea

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  app: {}
});
const iniciarServer = async () => {
  try {
    await server.register(routes); //Agregamos esta línea
    await server.start();
    console.log(`Servidor corriendo en: ${server.info.uri}`);
  } catch (error) {
    console.log('Error al iniciar el servidor Hapi');
  }
};
iniciarServer();