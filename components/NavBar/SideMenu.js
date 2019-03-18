import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

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

const SideMenu = ({ classes }) => {
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <img height={30} src="/static/assets/icon.png" />
          </ListItemIcon>
          <Link href="/">
            <ListItemText primary="Basic Setup" />
          </Link>
        </ListItem>
        <Divider />
        {links.filter(l => l.href !== Router.router.asPath).map((l) => (
          <React.Fragment>
            <Link href={l.href}>
              <ListItem button key={l.title}>
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

export default withStyles(styles)(SideMenu);
