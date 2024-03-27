import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Layout as AreaIcon } from 'react-feather';
import NavItem from './NavItem';

const loggedOutItems = [
  {
    href: '/areas',
    icon: AreaIcon,
    title: 'Áreas',
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  name: {
    marginBottom: 5,
  },
  avatar: {
    width: 64,
    height: 64,
    marginBottom: 15,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const renderNavItems = () => {
    return loggedOutItems;
  };

  const content = (
    <Box height='100%' display='flex' flexDirection='column'>
      <Box alignItems='center' display='flex' flexDirection='column' p={2}>
        <Avatar variant='rounded' className={classes.avatar} />
        <Typography className={classes.name} color='textPrimary' variant='h5'>
          Nícolas
        </Typography>
        <Typography color='textSecondary' variant='body2'>
          nicolasterramaia@gmail.com
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {renderNavItems().map((item) => (
            <NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor='left'
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant='temporary'
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor='left' classes={{ paper: classes.desktopDrawer }} open variant='persistent'>
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
