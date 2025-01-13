import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import { Email, ExitToApp } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext'; 

const ProfilePage = () => {
  const { logout,user } = useAuth();
  console.log(user.email);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#f5f5f5' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              fontSize: '2rem',
              backgroundColor: '#FFE600',
              color: '#000000',
              mb: 2,
            }}
          >
            {getInitials(user.userName)}
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000000' }}>
            {user.userName}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Email sx={{ color: '#000000', mr: 1 }} />
          <Typography variant="body1" sx={{ color: '#000000' }}>
            {user.email}
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<ExitToApp />}
          onClick={logout}
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: '#FFE600',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#FFD700',
            },
          }}
        >
          Cerrar Sesión
        </Button>
      </Paper>
    </Box>
  );
};

export default ProfilePage;

