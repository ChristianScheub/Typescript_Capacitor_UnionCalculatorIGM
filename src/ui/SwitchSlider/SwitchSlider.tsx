import React from 'react';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled component to customize the Switch
const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.primary.main,
  },
}));

interface SwitchSliderProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const SwitchSlider: React.FC<SwitchSliderProps> = ({ checked, onChange, label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{label}</span>
      <CustomSwitch checked={checked} onChange={onChange} />
    </div>
  );
};

export default SwitchSlider;