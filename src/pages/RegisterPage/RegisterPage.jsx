// src/pages/RegisterPage.jsx
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
import { Email, Lock, Person } from "@mui/icons-material";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password);
  };

  return (
    <AuthLayout>
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
            Regístrate
          </Typography>
        </Box>

        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "rgba(255, 230, 0, 0.7)" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: "rgba(255, 230, 0, 0.7)" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Contraseña"
            type="password"
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
            Crear Cuenta
          </Button>
        </form>

        <Box className="mt-6 text-center">
          <Typography variant="body2" className="text-gray-400">
            ¿Ya tienes cuenta?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/login")}
              sx={{
                color: "#FFE600",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Inicia Sesión
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
}
