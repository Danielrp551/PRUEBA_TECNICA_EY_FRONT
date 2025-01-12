import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { countries } from "../../constants/countries";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Texto copiado al portapapeles");
    },
    (err) => {
      console.error("Error al copiar texto: ", err);
    }
  );
};

export default function ProviderForm({
  mode,
  initialData,
  onSubmit,
  onCancel,
  isSubmitting,
}) {
  const isViewMode = mode === "view";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      razonSocial: "",
      nombreComercial: "",
      identificacionTributaria: "",
      numeroTelefonico: "",
      correoElectronico: "",
      sitioWeb: "",
      direccionFisica: "",
      pais: "",
      facturacionAnualUSD: "",
    },
  });

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Controller
            name="razonSocial"
            control={control}
            rules={{
              required: "Este campo es requerido",
              minLength: {
                value: 5,
                message: "La razón social debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 150,
                message: "La razón social no puede tener más de 150 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9\s.-]+$/,
                message:
                  "La razón social solo puede contener letras, números, espacios, puntos y guiones",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Razón Social"
                fullWidth
                disabled={isViewMode}
                error={!!errors.razonSocial}
                helperText={errors.razonSocial?.message}
                sx={{
                  "& label": {
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                  "& input": {
                    color: "black",
                  },
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="nombreComercial"
            control={control}
            rules={{
              required: "Este campo es requerido",
              maxLength: {
                value: 150,
                message:
                  "El nombre comercial no puede tener más de 150 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9\s.-]*$/,
                message:
                  "El nombre comercial solo puede contener letras, números, espacios, puntos y guiones",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre Comercial"
                fullWidth
                disabled={isViewMode}
                error={!!errors.nombreComercial}
                helperText={errors.nombreComercial?.message}
                sx={{
                  "& label": {
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                  "& input": {
                    color: "black",
                  },
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="identificacionTributaria"
            control={control}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value: /^\d{11}$/,
                message:
                  "La identificación tributaria debe tener exactamente 11 dígitos numéricos",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Identificación Tributaria"
                fullWidth
                disabled={isViewMode}
                error={!!errors.identificacionTributaria}
                helperText={errors.identificacionTributaria?.message}
                sx={{
                  "& label": {
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                  "& input": {
                    color: "black",
                  },
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="numeroTelefonico"
            control={control}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: "Ingrese un número de teléfono válido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Número Telefónico"
                fullWidth
                disabled={isViewMode}
                error={!!errors.numeroTelefonico}
                helperText={errors.numeroTelefonico?.message}
                sx={{
                  "& label": {
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                  "& input": {
                    color: "black",
                  },
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="correoElectronico"
            control={control}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ingrese una dirección de correo electrónico válida",
              },
            }}
            render={({ field }) => (
              <Box display="flex" alignItems="center">
                <TextField
                  {...field}
                  label="Correo Electrónico"
                  fullWidth
                  disabled={isViewMode}
                  error={!!errors.correoElectronico}
                  helperText={errors.correoElectronico?.message}
                  sx={{
                    "& label": {
                      color: "rgba(0, 0, 0, 0.87)",
                    },
                    "& input": {
                      color: "black",
                    },
                  }}
                />
                {isViewMode && (
                  <Tooltip title="Copiar correo electrónico">
                    <IconButton
                      onClick={() => copyToClipboard(field.value)}
                      size="small"
                      sx={{ ml: 1 }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="sitioWeb"
            control={control}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "Ingrese una URL válida",
              },
            }}
            render={({ field }) => (
              <Box display="flex" alignItems="center">
                <TextField
                  {...field}
                  label="Sitio Web"
                  fullWidth
                  disabled={isViewMode}
                  error={!!errors.sitioWeb}
                  helperText={errors.sitioWeb?.message}
                  sx={{
                    "& label": {
                      color: "rgba(0, 0, 0, 0.87)",
                    },
                    "& input": {
                      color: "black",
                    },
                  }}
                />
                {isViewMode && (
                  <Tooltip title="Copiar URL">
                    <IconButton
                      onClick={() => copyToClipboard(field.value)}
                      size="small"
                      sx={{ ml: 1 }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="direccionFisica"
            control={control}
            rules={{
              required: "Este campo es requerido",
              maxLength: {
                value: 255,
                message:
                  "La dirección física no puede tener más de 255 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9\s.,#-]+$/,
                message:
                  "La dirección física solo puede contener letras, números, espacios y símbolos como ., # y -",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Dirección Física"
                fullWidth
                disabled={isViewMode}
                error={!!errors.direccionFisica}
                helperText={errors.direccionFisica?.message}
                sx={{
                  "& label": {
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                  "& input": {
                    color: "black",
                  },
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="pais"
            control={control}
            rules={{
              required: "Este campo es requerido",
            }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.pais}>
                <InputLabel
                  sx={{
                    color: "rgba(0, 0, 0, 0.87)",
                    backgroundColor: "white",
                    "&.Mui-disabled": {
                      color: "rgba(0, 0, 0, 0.38)",
                    },
                  }}
                  disabled={isViewMode}
                >
                  País
                </InputLabel>
                <Select
                  {...field}
                  label="País"
                  disabled={isViewMode}
                  sx={{
                    "& label": {
                      color: "rgba(0, 0, 0, 0.87)",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FFE600",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FFE600",
                    },
                    "& .MuiSelect-select": {
                      color: "black",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "black",
                    },
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                          alt=""
                          style={{ marginRight: "8px" }}
                        />
                        {country.name}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="facturacionAnualUSD"
            control={control}
            rules={{
              required: "Este campo es requerido",
              min: {
                value: 0,
                message: "La facturación anual debe ser un número positivo",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Facturación Anual (USD)"
                fullWidth
                type="number"
                disabled={isViewMode}
                error={!!errors.facturacionAnualUSD}
                helperText={errors.facturacionAnualUSD?.message}
                sx={{
                  "& label": {
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                  "& input": {
                    color: "black",
                  },
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Box className="flex justify-end gap-2 mt-4">
            <Button
              onClick={onCancel}
              variant="outlined"
              sx={{
                borderColor: "#000000",
                color: "#000000",
                "&:hover": {
                  borderColor: "#000000",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              Cancelar
            </Button>
            {!isViewMode && (
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#FFE600",
                  color: "#000000",
                  "&:hover": {
                    backgroundColor: "#FFD700",
                  },
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} color="inherit" />
                ) : mode === "add" ? (
                  "Crear"
                ) : (
                  "Guardar"
                )}
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
