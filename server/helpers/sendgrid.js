const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (fromName, fromEmail, message) => {
  try {
    const email = {
      to: process.env.CONTACT_EMAIL,
      from: {
        email: `contact@${process.env.DOMAIN_NAME}`,
        name: `${fromName} through ${process.env.DOMAIN_NAME}`,
      },
      dynamic_template_data: {
        subject: 'Contact inquiry from website',
        message,
        from: {
          email: fromEmail,
          name: fromName,
        },
      },
      templateId: 'd-5c6c3fb5e6c4446ea6be2bdd0e718a88',
    };

    return await sgMail.send(email);
  } catch (e) {
    console.log('Failed to send contact email: ', JSON.stringify({
      message,
      from: {
        email: fromEmail,
        name: fromName,
      }
    }));
    throw e;
  }
};

module.exports = {
  send: sendEmail,
};
