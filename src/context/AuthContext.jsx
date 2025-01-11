import { createContext, useContext, useState, useEffect } from 'react';
import AuthService from "../services/AuthService";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { handleError } from '../helpers/ErrorHandler';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Revisamos si existe un token en localStorage al iniciar
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

  const navigate = useNavigate();

  // Método para iniciar sesión
  async function login(username, password) {
    try {
      const response = await AuthService.login(username, password);
      if(response){
        console.log('Inicio de sesión exitoso:', response);
        const userObj = {
          userName: response.userName,
          email: response.email,
        }
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(userObj));
        setToken(response.token);
        setUser(userObj);
        toast.success('Inicio de sesión exitoso');
        navigate('/proveedores');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  // Método para registrar un usuario
  async function register(email, username, password) {
    try{
      const response = await AuthService.register(email, username, password);
      if(response){
        console.log('Registro exitoso:', response);
        toast.success('Registro exitoso, inicia sesión');
        navigate('/login');
      }
    }
    catch(error){
      console.error('Error al registrarse:', error);
    }
  }

  // Método para cerrar sesión
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken('');
  }

  // Bandera que indica si hay un token válido
  const isAuthenticated = Boolean(token);

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook para usar el context fácilmente
export function useAuth() {
  return useContext(AuthContext);
}
