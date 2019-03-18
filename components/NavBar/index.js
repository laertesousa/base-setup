import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { AppBar, Toolbar, withStyles, Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import SideMenu from './SideMenu';
import useShowMenu from './useShowMenu';

const styles = ({ breakpoints }) => ({
  toolbar: {
    width: 'calc(100% - 32px)',
    maxWidth: breakpoints.width('lg'),
    margin: '0 auto',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function NavBar({ classes }) {
  const [showMenu, toggle] = useShowMenu(false);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classes.menuButton}
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1, cursor: 'pointer' }}>
              Basic Setup
            </Typography>
          </Link>
          <Link href="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={showMenu} onClose={toggle}>
        <SideMenu onSelection={toggle}/>
      </Drawer>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
