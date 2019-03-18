const Joi = require('joi');

const validatePayload = (req, res, next) => {
  Joi.validate(data, schema, (err, value) => {
    if(err) return res.status(400).json({ err, value });
    next();
  });
};

module.exports = validatePayload;
