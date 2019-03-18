import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { AppBar, Toolbar, withStyles, Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import SideMenu from './SideMenu';

const styles = ({ breakpoints }) => ({
  toolbar: {
    width: '100%',
    maxWidth: breakpoints.width('lg'),
    margin: '0 auto',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  toggleMenu = () => {
    console.log('toggle');
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { classes } = this.props;
    const { showMenu } = this.state;
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className={classes.menuButton}
              onClick={this.toggleMenu}
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
        <Drawer open={showMenu} onClose={this.toggleMenu}>
          <SideMenu />
        </Drawer>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
