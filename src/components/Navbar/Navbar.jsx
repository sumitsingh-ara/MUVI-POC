import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export const data = [
  { key: "token", label: "Fetch Token", path: "/" },
  { key: "upload", label: "Asset Upload", path: "/upload" },
  { key: "creation", label: "Content Creation", path: "/creation" },
  { key: "videos", label: "Show Videos", path: "/videos" },
];

export const Navbar = () => {
  return (
    <Menu theme="dark" mode="horizontal" style={{ backgroundColor: "#001529" }}>
      {data.map(({ key, path, label }) => (
        <Menu.Item key={key} style={{ margin: "0 10px" }}>
          <Link to={path} style={{ color: "white" }}>
            {label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
