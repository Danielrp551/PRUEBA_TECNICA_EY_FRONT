import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function SidebarLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { logout,user } = useAuth();

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex w-full h-screen">
      {/* Barra lateral */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={handleToggleSidebar} 
        onLogout={handleLogout}
      />

      {/* Contenido principal */}
      <div className="flex flex-col flex-grow">
        <Header 
          onToggleSidebar={handleToggleSidebar}
          handleLogout={handleLogout}
          userName={user.userName} 
        />
        {/* Acá van las pantallas anidadas */}
        <div className="p-4 flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
