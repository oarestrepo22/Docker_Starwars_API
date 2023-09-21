const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const server = express();

server.use(morgan('dev'));
server.use(express.json());

// rutas
server.use(routes);

module.exports = server;