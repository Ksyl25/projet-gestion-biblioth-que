import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Container, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Ouvre le menu latéral
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* Icone pour ouvrir le Drawer */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            BIBLIO JUNIA 
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer : menu latéral */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: 250 }}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Accueil" />
            </ListItem>
            <ListItem button component={Link} to="/auteur">
              <ListItemText primary="Auteur" />
            </ListItem>
            <ListItem button component={Link} to="/book">
              <ListItemText primary="Book" />
            </ListItem>
          </List>
        </div>
      </Drawer>

      {/* Contenu principal */}
      <Container sx={{ mt: 4 }}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
