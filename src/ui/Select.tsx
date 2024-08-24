import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent } from '@mui/material';

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>{placeholder || 'Bitte auswählen'}</InputLabel>
      <MuiSelect
        value={value}
        onChange={handleChange}
        label={placeholder || 'Bitte auswählen'}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;