import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div
            className="
    relative min-h-screen w-full overflow-hidden
    bg-gray-900                 /* modo claro: un gris muy oscuro */
    dark:bg-gray-950            /* modo oscuro: aún más oscuro */
    bg-[radial-gradient(ellipse_80%_80%_at_50%_10%,rgba(70,70,70,0.4),rgba(0,0,0,0.8))]
    dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_10%,rgba(50,50,50,0.2),rgba(0,0,0,0))]
       "
          >
            <AppRouter />
          </div>
          <ToastContainer />
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
