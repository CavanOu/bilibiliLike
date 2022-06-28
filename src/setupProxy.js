
// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function (app) {
//     app.use(
//         createProxyMiddleware('http://api.bilibili.com/x/web-interface/ranking/region?rid=21', {
//             target: 'http://localhost:3001',
//             changeOrigin: true,
//             pathRewrite: { '^/api1': '' }
//         }),
//         createProxyMiddleware('http://api.bilibili.com/x/web-interface/ranking/region?rid=21', {
//             target: 'http://localhost:3001',
//             changeOrigin: true,
//             pathRewrite: { '^/api2': '' }
//         }),
//     )
// }