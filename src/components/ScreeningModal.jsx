import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormGroup,
  CircularProgress,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import ScreeningResultTable from "./ScreeningResultTable";
import SourceCheckbox from "./SourceCheckbox";
import { Close as CloseIcon } from "@mui/icons-material";

const screeningSources = [
  { id: "icij", name: "ICIJ Offshore Leaks" },
  { id: "ofac", name: "OFAC Sanctions List" },
  { id: "worldbank", name: "World Bank Sanctioned Firms" },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function ScreeningModal({
  open,
  onClose,
  providerName,
  onScreening,
}) {
  const [selectedSources, setSelectedSources] = useState([]);
  const [isScreening, setIsScreening] = useState(false);
  const [results, setResults] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  const handleSourceChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedSources([...selectedSources, name]);
    } else {
      setSelectedSources(selectedSources.filter((source) => source !== name));
    }
  };

  const handleScreening = async () => {
    setIsScreening(true);
    try {
      const screeningResults = await onScreening(selectedSources);
      setResults(screeningResults);
      setTabValue(0);
    } catch (error) {
      console.error("Error during screening:", error);
    } finally {
      setIsScreening(false);
    }
  };

  const handleClose = () => {
    setSelectedSources([]);
    setResults([]);
    setIsScreening(false);
    setTabValue(0);
    onClose();
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "12px",
        },
      }}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, backgroundColor: "#000000", color: "white" }}
      >
        <Typography variant="h6" component="div">
          Screening de {providerName}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {!isScreening && results.length === 0 && (
          <FormGroup>
            {screeningSources.map((source) => (
              <SourceCheckbox
                key={source.id}
                source={source}
                isChecked={selectedSources.includes(source.id)}
                onChange={handleSourceChange}
              />
            ))}
          </FormGroup>
        )}
        {isScreening && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <CircularProgress />
          </div>
        )}
        {!isScreening && results.length > 0 && (
          <div>
            <Typography variant="h6" gutterBottom>
              Screening Resultados
            </Typography>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="screening results tabs">
              {results.map((result, index) => (
                <Tab label={result.sourceName} id={`simple-tab-${index}`} aria-controls={`simple-tabpanel-${index}`} key={index} />
              ))}
            </Tabs>
            {results.map((result, index) => (
              <TabPanel value={tabValue} index={index} key={index}>
                <ScreeningResultTable result={result} />
              </TabPanel>
            ))}
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
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
        {!isScreening && results.length === 0 && (
          <Button
            onClick={handleScreening}
            variant="contained"
            sx={{
              backgroundColor: "#FFE600",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#FFD700",
              },
            }}
            disabled={selectedSources.length === 0}
          >
            Iniciar Screening
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

