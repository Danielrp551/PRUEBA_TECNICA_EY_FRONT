import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Orbitron, sans-serif",
    h5: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#FFC72C", // Amarillo EY
      contrastText: "#000",
    },
    secondary: {
      main: "#000000", // Negro
      contrastText: "#fff",
    },
  },

  // Overrides globales de componentes
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white", // texto dentro del input
          "& fieldset": {
            borderColor: "rgba(255, 255, 255, 0.2)",
          },
          "&:hover fieldset": {
            borderColor: "rgba(255, 230, 0, 0.5)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FFE600",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.7)",
          "&.Mui-focused": {
            color: "#FFE600",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // Cambiamos el color del label cuando está en foco
          "& label.Mui-focused": {
            color: "#FFE600",
          },
          // Cambiamos el color del borde en modo Outlined
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
            "&:hover fieldset": {
              borderColor: "rgba(255, 230, 0, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFE600",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
