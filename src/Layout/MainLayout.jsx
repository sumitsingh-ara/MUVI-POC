import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

const WithToken = ({ children }) => {
  const childrenWithToken = React.Children.map(children, (child) =>
    React.cloneElement(child)
  );

  return childrenWithToken;
};

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        <WithToken>{children}</WithToken>
      </div>
    </div>
  );
};
