import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default Label;