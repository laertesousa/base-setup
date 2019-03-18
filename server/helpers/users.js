const Promise = require('promise');
const Users = require('mongoose').model('Users');

exports.create = (data) => {
  const user = new Users(data);
  return new Promise(function(resolve, reject) {
    user.save(function(err) {
      if (err) return reject(err);
      return resolve(user);
    })
  });
};

exports.get = (id) => {
  return Users.findOne({ _id: id }).exec();
};

exports.getAll = () => {
  return Users.find().exec();
};

