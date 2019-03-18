import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography } from "@material-ui/core";

const styles = ({ palette }) => ({
  root: {
    padding: '20px 0',
    backgroundColor: palette.primary.main,
  }
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography
        variant="body1"
        align="center"
        style={{ color: '#fff', fontWeight: 300 }}
      >Copyright &copy; Laerte Sousa 2019</Typography>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer);
