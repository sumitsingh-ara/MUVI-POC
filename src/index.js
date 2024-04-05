import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import axios from "axios";
import { Routing } from "./routing";

axios.defaults.baseURL = "https://apigateway.muvi.com";
// axios.defaults.headers.common["Content-Type"] = `application/json`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider
    theme={{ token: { colorPrimary: "blue", colorPrimaryBg: "white" } }}
  >
    <Routing />
  </ConfigProvider>
);
