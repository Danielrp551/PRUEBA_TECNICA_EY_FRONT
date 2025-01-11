import { useState,React } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

/**
 * @param {function} onToggleSidebar - Llamado al hacer clic en el ícono del menú para abrir/cerrar el Sidebar.
 * @param {function} onLogout - Llamado cuando el usuario hace clic en "Cerrar sesión".
 * @param {string}   userName - Nombre del usuario (opcional, si quieres mostrarlo).
 */
const Header = ({ userName, onToggleSidebar, handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFE600' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={onToggleSidebar}
          edge="start"
          sx={{ mr: 2, color: '#000000' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000000' }}>
          Panel
        </Typography>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenMenu}
          color="inherit"
        >
          <Avatar alt={userName} sx={{ bgcolor: '#000000', color: '#FFE600' }}>
            {userName.charAt(0)}
          </Avatar>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          PaperProps={{
            sx: {
              backgroundColor: '#000000',
              color: '#FFFFFF',
            },
          }}
        >
          <MenuItem onClick={() => navigate("perfil")} sx={{ '&:hover': { backgroundColor: 'rgba(255, 230, 0, 0.1)' } }}>Perfil</MenuItem>
          <MenuItem onClick={handleLogout} sx={{ '&:hover': { backgroundColor: 'rgba(255, 230, 0, 0.1)' } }}>Cerrar sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
