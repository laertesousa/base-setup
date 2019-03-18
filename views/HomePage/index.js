import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from '@material-ui/core/Typography';

const styles = ({ breakpoints }) => ({
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: breakpoints.width('lg'),
    minHeight: '80vh',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    [breakpoints.down('md')]: {
      flexDirection: 'column',
    }
  },
  title: {
    [breakpoints.down('md')]: {
      fontSize: 60,
    }
  },
  logo: {
    width: 100,
    marginRight: 50,
    [breakpoints.down('md')]: {
      marginRight: 0,
      marginBottom: 50,
    }
  }
});

const HomePageView = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img
        className={classes.logo}
        src="/static/assets/icon.png"
        width={100}
      />
      <Typography
        className={classes.title}
        variant="h1"
        align="center"
      >
        Home Page
      </Typography>
    </div>
  );
};

HomePageView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageView);
