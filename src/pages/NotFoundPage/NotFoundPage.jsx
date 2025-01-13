import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#FFE600' }}>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#FFFFFFF', mb: 4 }}>
          Página no encontrada
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#FFFFFFF' }}>
          Lo sentimos, la página que estás buscando no existe. Puede que haya sido movida o eliminada.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/login')}
          sx={{
            backgroundColor: '#FFE600',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#FFD700',
            },
          }}
        >
          Volver al inicio de sesión
        </Button>
      </Box>
    </Container>
  );
}

