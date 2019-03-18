const usersController = require('../controllers/users');
const SchemaValidator = require('../middleware/SchemaValidator');

const validateRequest = SchemaValidator(true);

module.exports = async (server) => {
  server.post('/api/users', validateRequest, usersController.post);
  server.get('/api/users', usersController.get);
};
