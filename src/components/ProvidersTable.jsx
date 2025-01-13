import { React } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Select,
  MenuItem,
  TablePagination,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Visibility, Edit, Delete, FindInPage  } from "@mui/icons-material";
import { countryMap } from "../constants/countries";

export default function ProvidersTable({
  providers,
  isLoading,
  isFetching,
  page,
  setPage,
  pageSize,
  setPageSize,
  totalCount,
  onView,
  onEdit,
  onDelete,
  onScreening,
}) {
  if (isLoading) {
    return (
      <Box className="flex justify-center items-center">
        <CircularProgress />
      </Box>
    );
  }

  console.log(
    "props",
    providers,
    isLoading,
    isFetching,
    page,
    pageSize,
    totalCount
  );
  if (!isLoading && totalCount === 0) {
    return (
      <Box className="flex justify-center items-center">
        <Typography variant="h6 text-black">
          No se encontraron proveedores.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <TableContainer component={Paper} className="shadow-lg rounded-lg">
        <Table>
          <TableHead>
            <TableRow className="bg-black">
              <TableCell
                sx={{ color: "#FFFFFF" }}
                className="text-yellow-400 font-medium"
              >
                Nombre Comercial
              </TableCell>
              <TableCell
                sx={{ color: "#FFFFFF" }}
                className="text-yellow-400 font-medium"
              >
                Identificación Tributaria
              </TableCell>
              <TableCell
                sx={{ color: "#FFFFFF" }}
                className="text-yellow-400 font-medium"
              >
                Correo Electrónico
              </TableCell>
              <TableCell
                sx={{ color: "#FFFFFF" }}
                className="text-yellow-400 font-medium"
              >
                País
              </TableCell>
              <TableCell
                sx={{ color: "#FFFFFF" }}
                className="text-yellow-400 font-medium"
              >
                Facturación Anual (USD)
              </TableCell>
              <TableCell
                sx={{ color: "#FFFFFF" }}
                className="text-yellow-400 font-medium"
              >
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {providers.map((provider) => (
              <TableRow key={provider.id} className="hover:bg-gray-50">
                <TableCell>{provider.nombreComercial}</TableCell>
                <TableCell>{provider.identificacionTributaria}</TableCell>
                <TableCell>{provider.correoElectronico}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${provider.pais.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${provider.pais.toLowerCase()}.png 2x`}
                      alt=""
                      style={{ marginRight: "8px" }}
                    />
                    {countryMap[provider.pais] || provider.pais}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    <Box
                      component="span"
                      sx={{ color: "green", fontWeight: "bold" }}
                    >
                      $
                    </Box>{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(provider.facturacionAnualUSD)}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box className="flex gap-2">
                    <IconButton size="small" onClick={() => onView(provider)}>
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => onEdit(provider)}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => onDelete(provider)}>
                      <Delete fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => onScreening(provider)}
                      aria-label="Screnning"
                    >
                      <FindInPage fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={totalCount}
        rowsPerPage={pageSize}
        page={page - 1}
        onPageChange={(event, newPage) => {
          setPage(newPage + 1);
        }}
        onRowsPerPageChange={(event) => {
          setPageSize(parseInt(event.target.value, 10));
          setPage(1); // Reinicia a la primera página
        }}
        sx={{
          ".MuiTablePagination-select": {
            color: "black",
          },
          ".MuiTablePagination-selectIcon": {
            color: "black",
          },
          ".MuiTablePagination-displayedRows": {
            color: "black",
          },
          ".MuiTablePagination-actions": {
            color: "black",
          },
          ".MuiIconButton-root": {
            "&:hover": {
              backgroundColor: "rgba(255, 230, 0, 0.08)",
            },
          },
        }}
      />
    </Box>
  );
}
