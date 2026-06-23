/* Servidor express basico */

// const express = require('express')
// const app = express()

// app.get('/', function(req, res){
//   res.send('Hello World Puerto 3000')
// })

// app.listen(3000)

//---------------------------------------------------------------------------------------

/*  Configuracion de variables de entorno (.env) */

// require('dotenv').config();

// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World Puerto 8080');
// });

// app.listen(process.env.PORT, () => {
//   console.log('Servidor corriendo en puerto ', process.env.PORT);
// });

//---------------------------------------------------------------------------------------

/* Express basado en clases (server.js) */ 
/* ---> server.js:1 */

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();    