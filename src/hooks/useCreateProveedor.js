import { useMutation, useQueryClient } from '@tanstack/react-query';
import ProveedorService from '../services/ProveedorService';
import { toast } from 'react-toastify';

/**
 * Hook personalizado para crear un proveedor.
 * @returns {object} Objeto de mutación de React Query.
 */
const useCreateProveedor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nuevoProveedor) => ProveedorService.create(nuevoProveedor),
      onSuccess: () => {
        toast.success('Proveedor creado exitosamente.');
        // Invalida la consulta de proveedores para refetch
        queryClient.invalidateQueries(['proveedores']);
      },
      onError: (error) => {
        toast.error('Error al crear el proveedor.');
        console.error('Error en useCreateProveedor:', error);
      },
    }
  );
};

export default useCreateProveedor;
