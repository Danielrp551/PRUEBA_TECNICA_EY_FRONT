import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import SidebarLayout from '../layouts/SidebarLayout';

import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

// Páginas privadas
import ProveedoresPage from '../pages/ProveedoresPage/ProveedoresPage';
import PerfilPage from '../pages/PerfilPage/PerfilPage';

export default function AppRouter() {
  return (
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Grupo de Rutas Privadas */}
        <Route element={<PrivateRoutes />}>
          {/* Aquí anidamos el layout */}
          <Route element={<SidebarLayout />}>
            <Route path="/proveedores">
                <Route index element={<ProveedoresPage />} />
            </Route>
            <Route path='/perfil' >
              <Route index element={<PerfilPage />} />
            </Route>
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}
