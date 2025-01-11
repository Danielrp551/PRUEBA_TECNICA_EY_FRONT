import axiosInstance from './axiosInstance';
import { handleError } from '../helpers/ErrorHandler';

/**
 * Servicio de autenticación (login, register).
 * Usa axiosInstance para no repetir baseURL ni configuraciones.
 */
const AuthService = {
  /**
   * Inicia sesión con username y password.
   * @param {string} username
   * @param {string} password
   * @returns {object} Respuesta del servidor (por ej. { token: '...', userName: '...' })
   */
  async login(username, password) {
    try {
      const payload = { username, password };
      const { data } = await axiosInstance.post('account/login', payload);
      return data;
    } catch (error) {
      console.log('Error en AuthService.login:', error)
      handleError(error);
      throw error; 
    }
  },

  /**
   * Registra un usuario nuevo.
   * @param {string} email
   * @param {string} username
   * @param {string} password
   * @returns {object} Respuesta del servidor (por ej. { token: '...', userName: '...' })
   */
  async register(email, username, password) {
    try {
      const payload = { email, username, password };
      const { data } = await axiosInstance.post('account/register', payload);
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};

export default AuthService;
