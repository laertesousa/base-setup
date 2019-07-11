import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import containerStyles from 'styles/container';

import ContactForm from './Form';

const styles = theme => {
  const { breakpoints } = theme;
  return {
    root: {
      ...containerStyles(theme),
      marginBottom: 100,
      [breakpoints.up('md')]: {
        position: 'relative',
        left: 66,
      }
    }
  };
};

const ContactPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ContactForm />
    </div>
  );
};

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactPage);