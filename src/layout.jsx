import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};
