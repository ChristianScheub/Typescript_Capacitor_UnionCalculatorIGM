import React from 'react';
import TextField from '@mui/material/TextField';

interface MaterialInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const MaterialInput: React.FC<MaterialInputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text'
}) => {

  return (
    <TextField
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth
      variant="outlined"
    />
  );
};

export default MaterialInput;