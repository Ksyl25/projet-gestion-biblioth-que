import React from 'react';
import { Dialog } from '@mui/material';

function Modal({ open, onClose, children }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="p-6 bg-white rounded">
        {children}
      </div>
    </Dialog>
  );
}

export default Modal;
