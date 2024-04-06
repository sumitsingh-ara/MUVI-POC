import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";

const WithToken = ({ children, token, setToken }) => {
  const childrenWithToken = React.Children.map(children, (child) =>
    React.cloneElement(child, { token, setToken })
  );

  return childrenWithToken;
};

export const MainLayout = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <div>
      <Navbar />
      <div>
        <WithToken token={token} setToken={setToken}>
          {children}
        </WithToken>
      </div>
    </div>
  );
};
