const SendGrid = require('../helpers/sendgrid');

const post = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const response = await SendGrid.send(name, email, message);
    return res.status(200).json(response);
  } catch(err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  post,
};
