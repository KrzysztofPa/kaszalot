import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import LogoImage from '../../logo.svg';

import useStyles from './TopMenu.style';


const TopMenu = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Hidden smUp>
            <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          <div className={classes.tabs}>
            <Hidden xsDown>
              <Tabs value={false}>
                <Button color="inherit" className={classes.tab}>Zakładka 1</Button>
                <Button color="inherit" className={classes.tab}>Zakładka 1</Button>
                <Button color="inherit" className={classes.tab}>Zakładka 1</Button>
              </Tabs>
            </Hidden>
          </div>

          <img src={LogoImage} alt="Logo" className={classes.logo} />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Szukaj..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>

          <Hidden xsDown>
            <IconButton color="inherit"  className={classes.buttonIcon} >
              <ShoppingCartIcon/>
            </IconButton>
          </Hidden>

          <Hidden xsDown>
            <Button color="inherit"className={classes.buttonIcon} >
              <PersonIcon/>
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        classes={{ paper: classes.drawerPaper }}
      >
        <Tabs value={false} orientation="vertical">
        <Button color="inherit" className={classes.tabDrawer} onClick={handleDrawerClose}>Zakładka 1</Button>
        <Button color="inherit" className={classes.tabDrawer} onClick={handleDrawerClose}>Zakładka 2</Button>
        <Button color="inherit" className={classes.tabDrawer} onClick={handleDrawerClose}>Zakładka 3</Button>
        <Button color="inherit" className={classes.tabDrawer} onClick={handleDrawerClose}>Koszyk</Button>
        <Button color="inherit" className={classes.tabDrawer} onClick={handleDrawerClose}>Logowanie</Button>
        </Tabs>
      </Drawer>
    </div>
  );
};

export default TopMenu;
