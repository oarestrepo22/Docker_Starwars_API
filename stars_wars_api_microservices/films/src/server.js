const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const server = express();
const { notFoundEndpoint, expressErrorHandler } = require('./utils');

server.use(morgan('dev'));
server.use(express.json());
server.use(routes);

// middleware not found Endpoint
server.use(notFoundEndpoint);

// middleware errorHandler
server.use(expressErrorHandler);

module.exports = server;
