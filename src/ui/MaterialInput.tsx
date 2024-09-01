import React from 'react';
import TextField from '@mui/material/TextField';

interface MaterialInputProps {
  value: string | number | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string | number;
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
      placeholder={placeholder?.toString()}
      fullWidth
      variant="outlined"
    />
  );
};

export default MaterialInput;