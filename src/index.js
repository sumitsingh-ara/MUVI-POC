import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import { Routing } from "./routing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider
    theme={{ token: { colorPrimary: "blue", colorPrimaryBg: "white" } }}
  >
    <Routing />
  </ConfigProvider>
);
