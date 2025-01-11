import React from "react";
import { Box, Typography } from "@mui/material";

export default function AuthLayout({ children }) {
  return (
    <Box className="flex flex-col md:flex-row min-h-screen">
      {/* Left Panel */}
      <Box className="w-full md:w-1/2 bg-black px-12 pb-12 pt-10 flex items-center justify-center">
        {/* Aquí inyectamos el formulario (login o register) */}
        {children}
      </Box>

      {/* Right Panel - Imagen y tagline */}
      <Box
        className="w-full md:w-1/2 relative md:mt-0 md:h-auto"
        sx={{
          backgroundImage: 'url("./ey_let_img_3.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: {
            xs: '400px',    // Altura mínima para pantallas pequeñas
            sm: '400px',    // Altura mínima para pantallas medianas pequeñas
            md: 'auto',     // Altura automática en pantallas grandes
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Box
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12"
          sx={{ zIndex: 1 }}
        >
          <Typography
            variant="h3"
            className="text-white font-bold mb-4"
            sx={{
              maxWidth: "600px",
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Building a better
          </Typography>
          <Typography
            variant="h3"
            className="text-yellow-400 font-bold"
            sx={{
              maxWidth: "600px",
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            working world
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
