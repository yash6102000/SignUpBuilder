import { Tabs, TabsProps } from "antd";
import React from "react";
import Sidebar from "./Sidebar";
import LoginTypes from "./loginTypes/LoginTypes";
import '../builder.css'
const SidebarTabs = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Login Types`,
      children: <LoginTypes />,
    },
    {
      key: "2",
      label: `Styling`,
      children: <Sidebar />,
    },
  ];
  return (
    <div>
      <Tabs id="sidebar-tabs-container" defaultActiveKey="1" items={items} />
    </div>
  );
};
export default SidebarTabs;
