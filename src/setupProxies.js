// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://e-commerce-ruddy-iota.vercel.app', // Point to your backend server
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove `/api` from the beginning of the URL
      },
    })
  );
};
