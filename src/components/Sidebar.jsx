import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  People as PeopleIcon,
  Inventory2 as Inventory2Icon,
  Settings as SettingsIcon,
  HelpOutline as HelpOutlineIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

/**
 * @param {boolean} isOpen - Indica si el sidebar está abierto o cerrado (para Drawer).
 * @param {function} onToggle - Función para alternar isOpen.
 * @param {function} onLogout - Función que llama a logout() del AuthContext.
 */
const Sidebar = ({ isOpen, onToggle, onLogout }) => {
  const menuItems = [
    { icon: <PeopleIcon sx={{ color: '#FFC107' }} />, text: 'Proveedores', to: '/proveedores' },
    //{ icon: <Inventory2Icon sx={{ color: '#FFC107' }} />, text: 'Productos', to: '/productos' },
    //{ icon: <SettingsIcon sx={{ color: '#FFC107' }} />, text: 'Configuraciones', to: '/configuraciones' },
    //{ icon: <HelpOutlineIcon sx={{ color: '#FFC107' }} />, text: 'Ayuda', to: '/ayuda' },
  ];

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={isOpen}
      onClose={onToggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#000000',
          color: '#FFFFFF',
        },
      }}
    >
      <div className="p-4 text-xl font-bold text-yellow-400">
        <img src="/ey_blanco.svg" alt="EY Logo" className="h-14 mb-2" />
        {/*EY Portal*/}
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton 
            key={index}
            component={Link}
            to={item.to}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 230, 0, 0.1)',
              },
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: '#FFFFFF' }} />
          </ListItemButton>
        ))}
        <ListItemButton 
          onClick={onLogout}
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 230, 0, 0.1)',
            },
            marginTop: 'auto', // Esto empujará el botón de cerrar sesión hacia abajo
          }}
        >
          <ListItemIcon>
            <LogoutIcon sx={{ color: '#FFC107' }} />
          </ListItemIcon>
          <ListItemText primary="Cerrar sesión" sx={{ color: '#FFFFFF' }} />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
