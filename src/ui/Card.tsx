import React, { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default Card;