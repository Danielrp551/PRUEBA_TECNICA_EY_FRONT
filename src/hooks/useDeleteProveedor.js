import { useMutation, useQueryClient } from '@tanstack/react-query';
import ProveedorService from '../services/ProveedorService';
import { toast } from 'react-toastify';

/**
 * Hook personalizado para eliminar un proveedor.
 * @returns {object} Objeto de mutación de React Query.
 */
const useDeleteProveedor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => ProveedorService.delete(id),
    onSuccess: () => {
      toast.success('Proveedor eliminado exitosamente.');
      // Invalida la consulta de proveedores para refetch
      queryClient.invalidateQueries(['proveedores']);
    },
    onError: (error) => {
      toast.error('Error al eliminar el proveedor.');
      console.error('Error en useDeleteProveedor:', error);
    },
  });
};

export default useDeleteProveedor;
