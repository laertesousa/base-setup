import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import AlertDialog from 'components/AlertDialog';
import TextField from 'components/TextField';
import { sendMessage } from 'apis/contact';

const styles = theme => ({
  root: {
    maxWidth: 550,
    marginLeft: 23,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  }
});

const ContactForm = ({ classes }) => {
  const defaultFormDataState = {
    name: '',
    email: '',
    message: '',
    isSubmitted: false,
  };

  const [formData, setFormData] = useState(defaultFormDataState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({});

  const submit = async () => {
    try {
      setError({});
      setIsSubmitting(true);
      const { name, email, message } = formData;
      await sendMessage(name, email, message);
      setFormData({
        ...formData,
        isSubmitted: true,
      });
      setIsSubmitting(false);
    } catch (err) {
      // console.log(err, err.status);
      setIsSubmitting(false);
      if (!err.data) {
        setError({
          general: 'An unexpected error occurred, try again or contact support.'
        });
      } else setError(err.data.error);
    }
  };

  const { name, email, message } = formData;

  return (
    <div className={classes.root}>
      <TextField
        label="Name"
        value={name}
        error={error.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        disabled={isSubmitting}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        error={error.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        disabled={isSubmitting}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        type="text"
        label="Message"
        value={message}
        error={error.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
        disabled={isSubmitting}
        /* eslint-disable-next-line */
        rows={5}
        multiline={true}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        style={{ margin: '5px 0' }}
        variant="contained"
        color="primary"
        onClick={submit}
        disabled={isSubmitting}
      >
        Send
      </Button>

      {formData.isSubmitted &&
        <AlertDialog
          title="Message sent!"
          message={'Thank you for reaching out. I will be responding back as soon as possible.'}
          open={formData.isSubmitted}
          onClose={() => setFormData(defaultFormDataState)}
        />
      }

      {error.general &&
        <AlertDialog
          title="An error occurred..."
          message={error.general || ''}
          open={!!error.general}
          onClose={() => setError({ ...error, general: null })}
        />
      }
    </div>
  );
};

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ContactForm);
