import React, { CSSProperties } from "react";
import { CardProps } from "./CardProps";

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <div style={{ ...styles.container, ...style }}>
      {children}
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "16px", // Slightly less padding for a cleaner look
    borderRadius: "8px", // Rounded corners
    backgroundColor: "#ffffff", // White background for a clean look
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Stronger shadow for depth
    marginBottom: "16px", // Adjust margin for spacing
    transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth transition
    cursor: "pointer", // Pointer cursor to suggest interactivity
    overflow: "hidden", // Ensure that content does not spill outside the rounded corners
  },
  containerHover: {
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)", // More intense shadow on hover
    transform: "scale(1.02)", // Slightly enlarge on hover for a subtle effect
  },
};

export default Card;