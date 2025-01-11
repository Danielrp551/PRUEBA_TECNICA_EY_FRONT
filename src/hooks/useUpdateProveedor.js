import { useMutation, useQueryClient } from '@tanstack/react-query';
import ProveedorService from '../services/ProveedorService';
import { toast } from 'react-toastify';

/**
 * Hook personalizado para actualizar un proveedor.
 * @returns {object} Objeto de mutación de React Query.
 */
const useUpdateProveedor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updatedProveedor }) => ProveedorService.update(id, updatedProveedor),
    onSuccess: () => {
      toast.success('Proveedor actualizado exitosamente.');
      // Invalida la consulta de proveedores para refetch
      queryClient.invalidateQueries(['proveedores']);
    },
    onError: (error) => {
      toast.error('Error al actualizar el proveedor.');
      console.error('Error en useUpdateProveedor:', error);
    },
  });
};

export default useUpdateProveedor;
