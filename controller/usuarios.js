/* Controlador de usuarios */

// const { response } = require('express');

// const usuariosGet = (req, res = response) => {
//     res.json({
//         msg: 'get API - controller'
//     });
// };

// const usuariosPut = (req, res = response) => {
//     res.json({
//         msg: 'put API - controller'
//     });
// };

// const usuariosPost = (req, res = response) => {
//     res.json({
//         msg: 'post API - controller'
//     });
// };

// const usuariosDelete = (req, res = response) => {
//     res.json({
//         msg: 'delete API - controller'
//     });
// };

// const usuariosPatch = (req, res = response) => {
//     res.json({
//         msg: 'patch API - controller'
//     });
// };

// // se exporta un objeto pues van a haber varios métodos
// module.exports = {
//     usuariosGet,
//     usuariosPut,
//     usuariosPost,
//     usuariosDelete,
//     usuariosPatch
// };

//---------------------------------------------------------------------------------------

/* Obtener datos de POST */

// const { response } = require('express');

// const usuariosGet = (req, res = response) => {
//     res.json({
//         msg: 'get API - controller'
//     });
// };

// const usuariosPut = (req, res = response) => {
//     res.json({
//         msg: 'put API - controller'
//     });
// };

// // Se obtiene el body de la petición POST
// const usuariosPost = (req, res = response) => {
//     const body = req.body;
//     res.json({
//         msg: 'post API - controller',
//         body
//     });
// };

// const usuariosDelete = (req, res = response) => {
//     res.json({
//         msg: 'delete API - controller'
//     });
// };

// const usuariosPatch = (req, res = response) => {
//     res.json({
//         msg: 'patch API - controller'
//     });
// };

// // se exporta un objeto pues van a haber varios métodos
// module.exports = {
//     usuariosGet,
//     usuariosPut,
//     usuariosPost,
//     usuariosDelete,
//     usuariosPatch
// };

//---------------------------------------------------------------------------------------

/* Actualizar usuarios con PUT */
/* ---> router/usuarios.js:61 */

const { response } = require('express');

// Mandar parámetros por la ruta (req.params)
const usuariosGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: 'get API - controller',
        query
    });
};

// Recibe parámetros por la ruta (req.params)
const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - controller',
        id
    });
};

// Se obtiene el body de la petición POST
const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'post API - controller',
        body
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
};

// se exporta un objeto pues van a haber varios métodos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};