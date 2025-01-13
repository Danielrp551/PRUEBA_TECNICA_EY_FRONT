import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { Visibility, Edit, Delete, FindInPage } from '@mui/icons-material';

const actionItems = [
  { icon: <Visibility />, label: 'Ver', description: 'Ver detalles del proveedor' },
  { icon: <Edit />, label: 'Editar', description: 'Modificar información del proveedor' },
  { icon: <Delete />, label: 'Eliminar', description: 'Eliminar proveedor del sistema' },
  { icon: <FindInPage />, label: 'Screening', description: 'Verificar antecedentes en fuentes de listas de riesgo' },
];

export default function ProveedoresGuiaSeccion() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
      <Typography variant="body2" sx={{ mr: 2, color: '#666666' }}>
        Acciones disponibles:
      </Typography>
      {actionItems.map((item, index) => (
        <Tooltip key={index} title={`${item.label}: ${item.description}`} arrow>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: index < actionItems.length - 1 ? 2 : 0,
              cursor: 'help',
            }}
          >
            {React.cloneElement(item.icon, { 
              sx: { 
                fontSize: '1.2rem', 
                color: '#000000',
                '&:hover': {
                  color: '#FFE600',
                }
              } 
            })}
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
}

