const usersHelper = require('../helpers/users');

const post = async (req, res) => {
  try {
    const response = await usersHelper.create(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const get = async (req, res) => {
  try {
    const response = await usersHelper.getAll();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json(e);
  }
};

module.exports = {
  post,
  get,
};
