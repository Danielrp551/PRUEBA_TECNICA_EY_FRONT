import React from "react";
import { Box, Chip, Button, Typography } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { countries } from "../constants/countries";

export default function SelectedFilters({
  selectedCountries,
  handleDeleteCountry,
  handleClearFilters,
}) {
  if (selectedCountries.length === 0) return null;

  return (
    <Box className="flex items-center gap-2 mb-4">
      <Typography color="textSecondary" variant="body2" sx={{ mr: 1 }}>
        Filtrar por:
      </Typography>
      {selectedCountries.map((countryCode) => {
        const country = countries.find((c) => c.code === countryCode);
        return (
          <Chip
            key={countryCode}
            label={country?.name}
            onDelete={() => handleDeleteCountry(countryCode)}
            deleteIcon={<CloseIcon />}
            sx={{
              backgroundColor: "rgba(255, 230, 0, 0.5)",
              "& .MuiChip-deleteIcon": {
                color: "rgba(0, 0, 0, 0.54)",
                "&:hover": {
                  color: "rgba(0, 0, 0, 0.87)",
                },
              },
            }}
          />
        );
      })}
      <Button
        onClick={handleClearFilters}
        sx={{
          color: "#1976d2",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
          },
        }}
      >
        Limpiar
      </Button>
    </Box>
  );
}
