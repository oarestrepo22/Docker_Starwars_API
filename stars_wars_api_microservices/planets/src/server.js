const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const utils = require('./utils');
const server = express();

server.use(morgan('dev'));
server.use(express.json());

// rutas
server.use(routes);

// si no encuentra la ruta entonces devuelve una respuesta 'not found'
server.use(utils.notFoundEndpoint);

// manejador de errores Express modificado
server.use(utils.expressErrorHandler);

module.exports = server;
