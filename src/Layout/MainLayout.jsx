import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "10px" }}>{children}</div>
    </div>
  );
};
