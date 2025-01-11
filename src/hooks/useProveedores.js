// src/hooks/useProveedores.js

import { useQuery } from '@tanstack/react-query';
import ProveedorService from '../services/ProveedorService';

/**
 * Custom hook para obtener proveedores con filtros y paginación.
 * @param {object} params - Parámetros de consulta (NombreEmpresa, PageNumber, PageSize).
 * @returns {object} Estado de la consulta y datos.
 */
const useProveedores = (params) => {
  return useQuery({
    queryKey: ['proveedores', params],
    queryFn: () => ProveedorService.getAll(params),
    keepPreviousData: true, // Mantiene los datos anteriores mientras se cargan nuevos
    staleTime: 5 * 60 * 1000, // Tiempo en milisegundos antes de considerar los datos obsoletos
    retry: 1, // Número de reintentos en caso de fallo
  });
};

export default useProveedores;
