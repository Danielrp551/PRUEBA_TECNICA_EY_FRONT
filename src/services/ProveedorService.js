import axiosInstance from "./axiosInstance";
import { handleError } from "../helpers/ErrorHandler";


const url ="proveedor";
/**
 * Servicio para gestionar operaciones de proveedores.
 * Utiliza axiosInstance para las solicitudes HTTP.
 */
const ProveedorService = {
  /**
   * Obtiene todos los proveedores con opciones de filtrado, ordenación y paginación.
   * @param {object} queryParams - Parámetros de consulta para filtrar, ordenar o paginar.
   * @returns {Promise<Array>} Lista de proveedores.
   */
  async getAll(
    queryParams = {}
  ) {

    const { SearchValue, PageNumber, PageSize, Paises } = queryParams;

    try {
      const params = new URLSearchParams();

      if (SearchValue) params.append("SearchValue", SearchValue);
      if (PageNumber) params.append("PageNumber", PageNumber);
      if (PageSize) params.append("PageSize", PageSize);
      //if (SortBy) params.append("SortBy", SortBy);
      //if (IsDescending) params.append("IsDescending", IsDescending);

      if (Paises && Paises.length > 0) {
        Paises.forEach((pais) => {
          params.append("Paises", pais);
        });
      }
      const response = await axiosInstance.get(url, {
        params: params,
      });
      console.log("ProveedorService.getAll:", response);
      return response.data;
    } catch (error) {
      console.error("Error en ProveedorService.getAll:", error);
      handleError(error);
      throw error;
    }
  },

  /**
   * Obtiene un proveedor por su ID.
   * @param {number} id - ID del proveedor.
   * @returns {Promise<object>} Datos del proveedor.
   */
  async getById(id) {
    try {
      const response = await axiosInstance.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error en ProveedorService.getById(${id}):`, error);
      handleError(error);
      throw error;
    }
  },

  /**
   * Crea un nuevo proveedor.
   * @param {object} proveedorData - Datos del proveedor a crear.
   * @returns {Promise<object>} Datos del proveedor creado.
   */
  async create(proveedorData) {
    try {
      const response = await axiosInstance.post(url, proveedorData);
      return response.data;
    } catch (error) {
      console.error("Error en ProveedorService.create:", error);
      handleError(error);
      throw error;
    }
  },

  /**
   * Actualiza un proveedor existente.
   * @param {number} id - ID del proveedor a actualizar.
   * @param {object} proveedorData - Nuevos datos del proveedor.
   * @returns {Promise<object>} Datos del proveedor actualizado.
   */
  async update(id, proveedorData) {
    try {
      const response = await axiosInstance.put(
        `${url}/${id}`,
        proveedorData
      );
      return response.data;
    } catch (error) {
      console.error(`Error en ProveedorService.update(${id}):`, error);
      handleError(error);
      throw error;
    }
  },

  /**
   * Elimina un proveedor por su ID.
   * @param {number} id - ID del proveedor a eliminar.
   * @returns {Promise<void>} Ningún contenido en caso de éxito.
   */
  async delete(id) {
    try {
      await axiosInstance.delete(`${url}/${id}`);
    } catch (error) {
      console.error(`Error en ProveedorService.delete(${id}):`, error);
      handleError(error);
      throw error;
    }
  },
};

export default ProveedorService;
