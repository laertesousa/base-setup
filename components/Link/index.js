import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({ palette }) => ({
  link: {
    color: palette.secondary.main,
  },
});

const Link = ({ classes, href, text, ...props }) => {
  return (
    <NextLink href={href}>
      <a className={classes.link} {...props}>{text}</a>
    </NextLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(Link);
