import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import ProviderForm from './ProviderForm';
import ProveedoresForm from './ProveedoresForm';

const modalTitles = {
  add: 'Nuevo Proveedor',
  edit: 'Editar Proveedor',
  view: 'Detalles del Proveedor',
};

export default function ProviderModal({ 
  open, 
  onClose, 
  mode = 'add', 
  initialData = null,
  onSubmit,
  isSubmitting,
}) {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '12px',
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#000000', color: 'white' }}>
        <Typography variant="h6" component="div">
          {modalTitles[mode]}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box className="p-4">
          <ProveedoresForm
            mode={mode}
            initialData={initialData}
            onSubmit={onSubmit}
            onCancel={onClose}
            isSubmitting={isSubmitting}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

