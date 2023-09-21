const app = require('./src/app');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { createProxy } = require('./src/utils');
const PORT = 8000;

app.use('/characters', createProxy('8001'));

app.use('/films', createProxy(8002));

app.use('/planets', createProxy(8003));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
