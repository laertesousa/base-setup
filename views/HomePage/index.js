import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from '@material-ui/core/Typography';

const styles = ({ breakpoints }) => ({
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: breakpoints.width('lg'),
    minHeight: 'calc(100vh - 120px)',
    justifyContent: 'center',
    margin: '0 auto',
    [breakpoints.down('md')]: {
      flexDirection: 'column',
    }
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 100,
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
      <div className={classes.innerContainer}>
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
    </div>
  );
};

HomePageView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageView);
