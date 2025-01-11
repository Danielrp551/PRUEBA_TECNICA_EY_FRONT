import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { Warning as WarningIcon } from '@mui/icons-material';

export default function DeleteConfirmationModal({ open, onClose, onConfirm, providerName }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '12px',
          maxWidth: '400px',
        }
      }}
    >
      <DialogTitle sx={{ backgroundColor: '#FFE600', color: '#000000', display: 'flex', alignItems: 'center', gap: 1 }}>
        <WarningIcon />
        <Typography variant="h6" component="div">
          Confirmar Eliminación
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <Typography variant="body1">
          ¿Estás seguro de que deseas eliminar al proveedor <strong>{providerName}</strong>?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Esta acción no se puede deshacer.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', px: 3, pb: 3 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: '#000000',
            color: '#000000',
            '&:hover': {
              borderColor: '#000000',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            backgroundColor: '#FF3B30',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#D63030',
            },
          }}
        >
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

