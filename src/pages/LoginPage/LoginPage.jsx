import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { toast } from "react-toastify";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(username, password);
  };

  return (
    <AuthLayout>
      {/* Aquí solo va el formulario */}
      <Box className="w-full max-w-md">
        <Box className="mb-12 text-center ">
          <img
            src="./ey_blanco.svg"
            alt="EY Logo"
            className="h-20 !mb-8 mx-auto"
            style={{
              filter: "brightness(1.2)",
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h4"
            className="text-white font-bold mb-2"
            sx={{
              fontFamily: '"Orbitron", sans-serif',
              letterSpacing: "0.05em",
            }}
          >
            Inicia Sesión
          </Typography>
        </Box>

        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "rgba(255, 230, 0, 0.7)" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: "rgba(255, 230, 0, 0.7)" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#FFE600",
              color: "#000000",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "0.75rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#FFD700",
              },
            }}
          >
            Iniciar Sesión
          </Button>
        </form>

        <Box className="mt-6 text-center">
          <Typography variant="body2" className="text-gray-400">
            ¿No tienes cuenta?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/register")}
              sx={{
                color: "#FFE600",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
}
