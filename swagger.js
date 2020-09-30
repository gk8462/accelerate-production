const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  // List of files to be processed.
  apis: ['./routers/admin.js'],
  // You can also set globs for your apis
  // e.g. './routes/*.js'
  host: 'localhost:3000',
  basePath: '/',
    swaggerDefinition: {
    info: {
      swagger: '2.0',
      title: 'Yoloj API',
      version: '1.0.0',
    },
  },
};
const specs = swaggerJsdoc(options);
module.exports= specs;