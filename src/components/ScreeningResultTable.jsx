import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const ScreeningResultTable = ({ result }) => {
  const getTableHeaders = () => {
    if (result.results.length === 0) return [];
    return Object.keys(result.results[0]).filter(key => key !== 'source');
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {result.sourceName} - {result.numberOfHits} hit(s)
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {getTableHeaders().map((header) => (
                <TableCell key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {result.results.map((item, index) => (
              <TableRow key={index}>
                {getTableHeaders().map((header) => (
                  <TableCell key={header}>{item[header] || 'N/A'}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScreeningResultTable;

