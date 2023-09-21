const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const { notFoundEndpoint, expressErrorHandler } = require('./utils');

const server = express();

server.use(morgan('dev'));

server.use(express.json());

server.use(router);

server.use(notFoundEndpoint);

server.use(expressErrorHandler);

module.exports = server;
