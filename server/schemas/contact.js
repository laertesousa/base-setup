const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().required().trim().label('Name'),
  email: Joi.string().email({ minDomainSegments: 2 }).required().label('Email'),
  message: Joi.string().min(10).required().trim().label('Message'),
});
