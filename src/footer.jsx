import React from "react";

export const Footer = () => {
  return (
    <footer
      className="grid-container"
      style={{ height: "60px", display: "flex", alignItems: "center" }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          margin: "0px",
          padding: "0px",
        }}
      >
        &copy; {new Date().getFullYear()} Colette Fleury
      </p>
    </footer>
  );
};
