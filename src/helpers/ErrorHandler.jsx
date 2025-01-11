import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Maneja los errores devueltos por Axios y muestra mensajes con react-toastify.
 * Redirige al login si el status es 401.
 */
export function handleError(error) {
  // Verificamos si es un error de Axios
  if (axios.isAxiosError(error)) {
    const { response } = error;
    const errData = response?.data;      // Esto contiene el payload de la respuesta
    const status = response?.status;     // Estatus HTTP 
    const errors = errData?.errors;      // Podría ser un array o un objeto

    console.log('Error en handleError:', error);
    // Caso 1: errors es un array
    if (Array.isArray(errors)) {
        console.log("errors", errors);

        errors.forEach((item) => {
        // 1. Si es un string, lo mostramos tal cual
        if (typeof item === "string") {
          toast.warning(item);
        // 2. Si es un objeto con `description`, lo mostramos
        } else if (item && typeof item === "object" && item.description) {
          toast.warning(item.description);
        // 3. Fallback: si es un objeto distinto o algo inesperado
        } else {
          toast.warning(JSON.stringify(item));
        }
      });

    // Caso 2: errors es un objeto con propiedades (ej. { email: ['El email ya está en uso'], password: [...] })
    } else if (typeof errors === 'object' && errors !== null) {
      for (let field in errors) {
        if (Array.isArray(errors[field])) {
          toast.warning(errors[field][0]);
        }
      }

    // Caso 3: Status 401 => Redirigir a login
    } else if (status === 401) {
       toast.warning(errData || 'Sesión expirada. Por favor, inicia sesión nuevamente.');

    // Caso 4: Muestra el contenido errData directo (si no encaja en los casos anteriores)
    } else if (errData) {
      toast.warning(errData);

    // Caso 5: Error desconocido pero con response
    } else {
      toast.warning('Ocurrió un error desconocido en la respuesta del servidor.');
    }

  // Error que no es de Axios (por ejemplo, un throw manual)
  } else {
    toast.warning('Ha ocurrido un error no controlado.');
  }
}
