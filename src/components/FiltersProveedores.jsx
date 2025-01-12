import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { countries } from "../constants/countries";

export default function Filters({
  searchValue,
  setSearchValue,
  handleSearchKeyDown,
  selectedCountries,
  handleCountryChange,
  sortBy,
  handleSortChange,
}) {
  return (
    <Box className="flex gap-4 mb-6">
      <TextField
        placeholder="Buscar proveedor..."
        variant="outlined"
        size="small"
        className="flex-1"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearchKeyDown}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
            "&:hover fieldset": {
              borderColor: "#FFE600",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFE600",
            },
            "& input": {
              color: "black",
            },
          },
          "& .MuiInputLabel-root": {
            color: "black",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
            </InputAdornment>
          ),
        }}
      />
      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel sx={{ color: "rgba(0, 0, 0, 0.87)" }}>País</InputLabel>
        <Select
          value=""
          label="País"
          onChange={handleCountryChange}
          sx={{
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
            <MenuItem
              key={country.code}
              value={country.code}
              disabled={selectedCountries.includes(country.code)}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                  alt={country.name}
                  style={{ marginRight: "8px" }}
                />
                {country.name}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl size="small" sx={{ minWidth: 200, ml: 2 }}>
        <InputLabel sx={{ color: "rgba(0, 0, 0, 0.87)" }}>Ordenar por</InputLabel>
        <Select
          value={sortBy}
          label="Ordenar por"
          onChange={handleSortChange}
          sx={{
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
          <MenuItem value="">Ninguno</MenuItem>
          <MenuItem value="nombreComercial_asc">Nombre Comercial (A-Z)</MenuItem>
          <MenuItem value="nombreComercial_desc">Nombre Comercial (Z-A)</MenuItem>
          <MenuItem value="facturacionAnualUSD_asc">Facturación Anual (Menor a Mayor)</MenuItem>
          <MenuItem value="facturacionAnualUSD_desc">Facturación Anual (Mayor a Menor)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
