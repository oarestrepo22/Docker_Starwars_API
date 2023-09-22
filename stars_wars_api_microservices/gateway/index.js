const express = require('express');
const morgan = require('morgan');
const { createProxy } = require('./utils');
const { createProxyMiddleware } = require('http-proxy-middleware');
const PORT = 8000;

const app = express();
app.use(morgan('dev'));
//app.use(express.json())

app.use('/characters', createProxy('characters', 8001));

app.use('/films', createProxy('films', 8002));

app.use('/planets', createProxy('planets', 8003));

app.listen(PORT, console.log(`Gateway on port ${PORT}`));
