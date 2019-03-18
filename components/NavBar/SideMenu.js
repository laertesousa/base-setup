import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { List, ListItem, ListItemIcon, withStyles, ListItemText, Divider } from '@material-ui/core';
import { Home, Phone, Work } from '@material-ui/icons';

const links = [
  { title: 'Home', href: '/', icon: <Home /> },
  { title: 'Samples', href: '/samples', icon: <Work /> },
  { title: 'Contact', href: '/contact', icon: <Phone /> },
];

const styles = {
  root: {
    width: 250,
  }
};

const SideMenu = ({ classes, onSelection }) => {
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <img height={30} src="/static/assets/icon.png" />
          </ListItemIcon>
          <ListItemText primary="Basic Setup" />
        </ListItem>
        <Divider />
        {links.map((l) => (
          <React.Fragment key={l.title}>
            <Link href={l.href}>
              <ListItem button onClick={() => onSelection ? onSelection() : null}>
                {l.icon && <ListItemIcon>{l.icon}</ListItemIcon>}
                <ListItemText primary={l.title} />
              </ListItem>
            </Link>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

SideMenu.propsTypes = {
  onSelection: PropTypes.func,
};

SideMenu.defaultProps = {
  onSelection: null,
};

export default withStyles(styles)(SideMenu);
