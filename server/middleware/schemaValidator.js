const _ = require('lodash');
const Joi = require('joi');
const Schemas = require('../schemas');
const errorMessages = require('../constants/errorMessages');

module.exports = (useJoiError = false) => {
  // useJoiError determines if we should respond with the base Joi error
  // boolean: defaults to false
  const _useJoiError = _.isBoolean(useJoiError) && useJoiError;

  // enabled HTTP methods for request data validation
  const _supportedMethods = ['post', 'put'];

  // Joi validation options
  const _validationOptions = {
    abortEarly: false, // abort after the last validation error
    allowUnknown: true, // allow unknown keys that will be ignored
    stripUnknown: true // remove unknown keys from the validated data
  };

  // return the validation middleware
  return (req, res, next) => {
    let route = '';
    // TODO: handle proper case
    if (req.route.path) {
      route = req.route.path.replace('/api/', '').replace('-','').toLowerCase();
    }

    const method = req.method.toLowerCase();

    if (_.includes(_supportedMethods, method) && _.has(Schemas, route)) {
      // get schema for the current route
      const _schema = _.get(Schemas, route);

      if (_schema) {
        // Validate req.body using the schema and validation options
        return Joi.validate(req.body, _schema, _validationOptions, (err, data) => {
          if (err) {
            // Joi Error
            const JoiError = {
              status: 'failed',
              // fetch only message and type from each error
              error: _.reduce(err.details, (acc, { message, context }) => {
                acc[context.key] = message.replace(/['"]/g, '');
                return acc;
              }, {}),
            };

            // Custom Error
            const CustomError = {
              status: 'failed',
              error: {
                general: errorMessages.GENERAL
              },
            };

            // Send back the JSON error response
            res.status(400).json(_useJoiError ? JoiError : CustomError);
          } else {
            // Replace req.body with the data after Joi validation
            req.body = data;
            next();
          }
        });
      }
    }

    next();
  };
};