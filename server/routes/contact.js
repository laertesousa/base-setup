const contactController = require('../controllers/contact');
const schemaValidator = require('../middleware/schemaValidator');

const validateRequest = schemaValidator(true);

module.exports = async (server) => {
  server.post('/api/contact', validateRequest, contactController.post);
};
