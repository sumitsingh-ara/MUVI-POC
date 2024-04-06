import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export const data = [
  { key: "token", label: "Fetch Token", path: "/" },
  { key: "upload", label: "Asset Upload", path: "/upload" },
  { key: "creation", label: "Content Creation", path: "/creation" },
  { key: "videos", label: "Show Videos", path: "/videos" },
];

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        backgroundColor: "#001529",
        display: "flex", // Use flexbox
        alignItems: "center", // Align items vertically
        padding: "10px 0",
      }}
      onClick={() => {
        if (!collapsed) toggleCollapsed();
      }}
    >
      <Button
        type="default"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
      >
        {collapsed ? "Menu" : "Close"}
      </Button>
      <Drawer
        placement="left"
        onClose={toggleCollapsed}
        visible={!collapsed}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          theme="dark"
          mode="vertical"
          style={{ backgroundColor: "#001529" }}
        >
          {data.map(({ key, path, label }) => (
            <Menu.Item key={key} style={{ margin: "10px 0" }}>
              <Link to={path} style={{ color: "white" }}>
                {label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </div>
  );
};
