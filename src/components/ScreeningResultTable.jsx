import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";

const ScreeningResultTable = ({ result }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getTableHeaders = () => {
    if (result.results.length === 0) return [];
    return Object.keys(result.results[0]).filter((key) => key !== "source");
  };

  const headers = getTableHeaders();

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {result.sourceName} - {result.numberOfHits} hit(s)
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow className="bg-black">
              {headers.map((header) => (
                <TableCell
                  sx={{ color: "#FFFFFF" }}
                  className="text-yellow-400 font-medium"
                  key={header}
                >
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {result.results
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow key={index}>
                  {headers.map((header) => (
                    <TableCell key={header}>{item[header] || "N/A"}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {result.results.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={result.results.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
};

export default ScreeningResultTable;
