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
} from "@mui/material";
import { countries } from "../../constants/countries";

export default function ProviderForm({
  mode,
  initialData,
  onSubmit,
  onCancel,
  isSubmitting
}) {
  const isViewMode = mode === "view";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      nombreEmpresa: "",
      nombreContacto: "",
      ruc: "",
      telefono: "",
      email: "",
      paginaWeb: "",
      direccion: "",
      ciudad: "",
      pais: "",
      codigoPostal: "",
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
            name="nombreEmpresa"
            control={control}
            rules={{
              required: "Este campo es requerido",
              maxLength: {
                value: 100,
                message:
                  "El nombre de la empresa debe tener menos de 100 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre de la Empresa"
                fullWidth
                disabled={isViewMode}
                error={!!errors.nombreEmpresa}
                helperText={errors.nombreEmpresa?.message}
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
            name="nombreContacto"
            control={control}
            rules={{
              required: "Este campo es requerido",
              maxLength: {
                value: 100,
                message:
                  "El nombre del contacto debe tener menos de 100 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre del Contacto"
                fullWidth
                disabled={isViewMode}
                error={!!errors.nombreContacto}
                helperText={errors.nombreContacto?.message}
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
            name="ruc"
            control={control}
            rules={{
              required: "Este campo es requerido",
              minLength: {
                value: 11,
                message: "El RUC debe tener exactamente 11 caracteres",
              },
              maxLength: {
                value: 11,
                message: "El RUC debe tener exactamente 11 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="RUC"
                fullWidth
                disabled={isViewMode}
                error={!!errors.ruc}
                helperText={errors.ruc?.message}
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
            name="telefono"
            control={control}
            rules={{
              required: "Este campo es requerido",
              maxLength: {
                value: 20,
                message: "El teléfono debe tener menos de 20 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Teléfono"
                fullWidth
                disabled={isViewMode}
                error={!!errors.telefono}
                helperText={errors.telefono?.message}
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
            name="email"
            control={control}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Dirección de email inválida",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                disabled={isViewMode}
                error={!!errors.email}
                helperText={errors.email?.message}
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
            name="paginaWeb"
            control={control}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "URL inválida",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Página Web"
                fullWidth
                disabled={isViewMode}
                error={!!errors.paginaWeb}
                helperText={errors.paginaWeb?.message}
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
          <Controller
            name="direccion"
            control={control}
            rules={{
              required: "Este campo es requerido",
              maxLength: {
                value: 100,
                message: "La dirección debe tener menos de 100 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Dirección"
                fullWidth
                disabled={isViewMode}
                error={!!errors.direccion}
                helperText={errors.direccion?.message}
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
            name="ciudad"
            control={control}
            rules={{
              required: "Este campo es requerido",
              maxLength: {
                value: 100,
                message: "La ciudad debe tener menos de 100 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Ciudad"
                fullWidth
                disabled={isViewMode}
                error={!!errors.ciudad}
                helperText={errors.ciudad?.message}
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
                <InputLabel sx={{ color: "rgba(0, 0, 0, 0.87)" }}>País</InputLabel>
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
                    "& .MuiFormLabel-colorPrimary":{
                      color: "black",
                    }
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
            name="codigoPostal"
            control={control}
            rules={{
              required: "Este campo es requerido",
              maxLength: {
                value: 10,
                message: "El código postal debe tener menos de 10 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Código Postal"
                fullWidth
                disabled={isViewMode}
                error={!!errors.codigoPostal}
                helperText={errors.codigoPostal?.message}
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
