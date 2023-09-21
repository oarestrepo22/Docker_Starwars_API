const { createProxyMiddleware } = require('http-proxy-middleware');

const createProxy = (localHost) => {
  return createProxyMiddleware({
    target: `http://localhost:${localHost}`,
    changeOrigin: true,
  });
};

module.exports = createProxy;
