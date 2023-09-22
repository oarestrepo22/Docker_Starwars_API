const { createProxyMiddleware } = require('http-proxy-middleware');

const createProxy = (containerName, containerPort) => {
  return createProxyMiddleware({
    target: `http://${containerName}:${containerPort}`,
    changeOrigin: true,
  });
};

module.exports = createProxy;
