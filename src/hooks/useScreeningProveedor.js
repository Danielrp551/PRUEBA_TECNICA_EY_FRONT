import { useMutation } from '@tanstack/react-query';
import ScreeningService from '../services/ScreeningService';
import { toast } from 'react-toastify';

/**
 * Hook personalizado para obtener los datos de screening de forma manual.
 * @returns {object} Objeto de mutación de React Query con { mutate, data, error, isLoading }.
 */
const useScreeningProveedor = () => {
  return useMutation({
    mutationFn: (entityName) => ScreeningService.getScreening(entityName),
    onSuccess: (data) => {
      toast.success('Screening obtenido correctamente.');
    },
    onError: (error) => {
      toast.error('Error al obtener el screening.');
      console.error('Error en useScreening:', error);
    },
    retry: false, 
  });
};

export default useScreeningProveedor;
