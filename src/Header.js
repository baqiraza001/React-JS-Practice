import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Menu, MenuItem, Button } from '@mui/material';
import {AccountCircle, Search} from '@mui/icons-material';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static"  sx={{marginBottom: '30px'}}>
      <Toolbar>
        <Typography variant="h6">
          My Website
        </Typography>
        <div style={{flexGrow:1}}/>
        <div>
          <IconButton color="inherit">
            <Search/>
          </IconButton>
          <InputBase placeholder="Search…"/>
        </div>
        <div>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Sign In</Button>
        </div>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
