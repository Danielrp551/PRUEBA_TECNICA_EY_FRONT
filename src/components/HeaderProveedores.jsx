import React from "react";
import { Box, Button, Typography } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function Header({ onOpenModal }) {
  return (
    <Box className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Proveedores</h1>
      <Button
        variant="contained"
        startIcon={<GroupAddIcon />}
        sx={{
          backgroundColor: "#FFE600",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#FFD700",
          },
        }}
        onClick={() => onOpenModal('add')}
      >
        | Nuevo proveedor
      </Button>
    </Box>
  );
}
