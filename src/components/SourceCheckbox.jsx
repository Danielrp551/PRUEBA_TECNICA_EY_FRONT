import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const SourceCheckbox = ({ source, isChecked, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={onChange}
          name={source.id}
        />
      }
      label={source.name}
    />
  );
};

export default SourceCheckbox;

