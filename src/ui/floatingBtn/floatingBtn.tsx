import React, { CSSProperties } from "react";
import { IconButton } from "@mui/material";
import { IconType } from "react-icons";


export enum ButtonAlignment {
  LEFT = "LEFT",
  CENTER = "CENTER",
  RIGHT = "RIGHT",
}

interface FloatingBtnProps {
  alignment: ButtonAlignment;
  icon: IconType;
  onClick: () => void;
  ariaLabelledBy?: string; 
}


const FloatingBtn: React.FC<FloatingBtnProps> = ({ alignment, icon, onClick, ariaLabelledBy }) => {

  let positionStyle: CSSProperties;

  switch (alignment) {
    case ButtonAlignment.LEFT:
      positionStyle = {
        position: "fixed",
        bottom: "10vw",
        left: "0rem",
        transform: "translate(50%, -50%)",
        zIndex: 100,
      };
      break;
    case ButtonAlignment.CENTER:
      positionStyle = {
        position: "fixed",
        bottom: "10vw",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
      };
      break;
    case ButtonAlignment.RIGHT:
      positionStyle = {
        position: "fixed",
        bottom: "10vw",
        right: "0rem",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
      };
      break;
  }

  return (
    <div style={positionStyle} data-testid="floating-btnDiv">
      <IconButton
        sx={{
          height: "4rem",
          width: "4rem",
          borderColor: "#0a58ca",
          borderRadius: '50%',
          backgroundColor: 'var(--highlight-color, #0a58ca)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'var(--highlight-color-hover, #084298)',
          },
        }}
        className="shadow"
        onClick={onClick}
        data-testid="floating-btn" 
        aria-labelledby={ariaLabelledBy}
      >
        {React.createElement(icon, { size: 35 })}
      </IconButton>
    </div>
  );
};

export default FloatingBtn;
