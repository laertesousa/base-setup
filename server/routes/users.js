const usersController = require('../controllers/users');
const schemaValidator = require('../middleware/schemaValidator');

const validateRequest = schemaValidator(true);

module.exports = async (server) => {
  server.post('/api/users', validateRequest, usersController.post);
  server.get('/api/users', usersController.get);
};
