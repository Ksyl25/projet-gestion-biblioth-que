// src/components/drawer.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

const CustomDrawer = ({ open, onClose, children }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box p={2} width="300px">
        {children}
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
