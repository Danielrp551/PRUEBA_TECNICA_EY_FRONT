import axiosInstance from "./axiosInstance";
import { handleError } from "../helpers/ErrorHandler";


const url ="screening";
/**
 * Servicio para gestionar operaciones de screening.
 */
const ScreeningService = {
  /**
   * Obtiene todos los hits y results en fuentes de lista de alto riesgo.
   * @param {string} EntityName - Parámetros de consulta.
   * @returns {Promise<Array>} Lista de screening por cada fuente.
   */
  async getScreening(
    EntityName = null,
  ) {

    try {
      const params = new URLSearchParams();

      if (EntityName) params.append("EntityName", EntityName);

      const response = await axiosInstance.get(url, {
        params: params,
      });
      console.log("ScreeningService.getScreening:", response);
      return response.data.sources;
    } catch (error) {
      console.error("Error en ScreeningService.getScreening:", error);
      handleError(error);
      throw error;
    }
  },
};

export default ScreeningService;
