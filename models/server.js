/* Express basado en clases */

// const express = require('express');

// class Server {
//     constructor() {
//         this.app = express();
//         this.port = process.env.PORT;
//         this.routes();
//     }

//     routes() {
//         this.app.get('/', (req, res) => {
//             res.send('Hello World desde Server');
//         });
//     }

//     listen() {
//         this.app.listen(this.port, () => {
//             console.log('Servidor corriendo en puerto ', this.port);
//         });
//     }
// }

// module.exports = Server;

//---------------------------------------------------------------------------------------

/* Servir archivos estáticos */
/* ---> index.html */

// const express = require('express');

// class Server {

//     constructor() {
//         this.app = express();
//         this.port = process.env.PORT;
//         // Middlewares
//         this.middlewares();
//         this.routes();
//     }

//     middlewares() {
//         this.app.use(express.static('public'));
//     }

//     routes() {
//         this.app.get('/api', (req, res) => {
//             res.send('Hello World Api');
//         });
//     }

//     listen() {
//         this.app.listen(this.port, () => {
//             console.log('Servidor corriendo en puerto', this.port);
//         });
//     }
// }

// module.exports = Server;

//---------------------------------------------------------------------------------------


/* Peticiones HTTP */

// const express = require('express');

// class Server {

//     constructor() {
//         this.app = express();
//         this.port = process.env.PORT;
//         // Middlewares
//         this.middlewares();
//         this.routes();
//     }

//     middlewares() {
//         this.app.use(express.static('public'));
//     }

//     routes() {
//         this.app.get('/api', (req, res) => {
//             res.json({
//                 msg: 'get API'
//             });
//         });

//         this.app.put('/api', (req, res) => {
//             res.json({
//                 msg: 'put API'
//             });
//         });

//         this.app.post('/api', (req, res) => {
//             res.json({
//                 msg: 'post API'
//             });
//         });

//         this.app.delete('/api', (req, res) => {
//             res.json({
//                 msg: 'delete API'
//             });
//         });

//     }

//     listen() {
//         this.app.listen(this.port, () => {
//             console.log('Servidor corriendo en puerto', this.port);
//         });
//     }
// }

// module.exports = Server;

//---------------------------------------------------------------------------------------

/* Uso de CORS Middleware */

// const express = require('express');
// const cors = require('cors');

// class Server {

//     constructor() {
//         this.app = express();
//         this.port = process.env.PORT;
//         // Middlewares
//         this.middlewares();
//         this.routes();
//     }

//     middlewares() {
//         //CORS
//         this.app.use(cors());
//         // Directorio público
//         this.app.use(express.static('public'));
//     }

//     routes() {
//         this.app.get('/api', (req, res) => {
//             res.json({
//                 msg: 'get API'
//             });
//         });

//         this.app.put('/api', (req, res) => {
//             res.json({
//                 msg: 'put API'
//             });
//         });

//         this.app.post('/api', (req, res) => {
//             res.json({
//                 msg: 'post API'
//             });
//         });

//         this.app.delete('/api', (req, res) => {
//             res.json({
//                 msg: 'delete API'
//             });
//         });

//     }

//     listen() {
//         this.app.listen(this.port, () => {
//             console.log('Servidor corriendo en puerto', this.port);
//         });
//     }
// }

// module.exports = Server;

//---------------------------------------------------------------------------------------

/* Separador de rutas (user.js) */

// const express = require('express');
// const cors = require('cors');

// class Server {

//     constructor() {
//         this.app = express();
//         this.port = process.env.PORT;
//         this.usuariosPath = '/api/usuarios';
//         // Middlewares
//         this.middlewares();
//         this.routes();
//     }

//     middlewares() {
//         //CORS
//         this.app.use(cors());
//         // Directorio público
//         this.app.use(express.static('public'));
//     }

//     routes() { /* ---> router/usuarios.js:1 */
//         this.app.use(this.usuariosPath, require('../router/usuarios'));        
//     }

//     listen() {
//         this.app.listen(this.port, () => {
//             console.log('Servidor corriendo en puerto', this.port);
//         });
//     }
// }

// module.exports = Server;

//---------------------------------------------------------------------------------------

/* Obtener datos de POST (postman) */

const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json()); /* ---> controller/usuarios.js:48 */
        // Directorio público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../router/usuarios'));        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;
