import { Tabs, TabsProps } from "antd";
import React from "react"
import Sidebar from "./Sidebar";
import LoginTypes from "./loginTypes/LoginTypes";
const SidebarTabs=()=>{
    const items: TabsProps["items"] = [
        {
          key: "1",
          label: `Login Types`,
          children: <LoginTypes/>,
        },
        {
          key: "2",
          label: `Styling`,
          children: <Sidebar />,
        },
      ];
    return(
        <div>
  <Tabs  defaultActiveKey="1" items={items} />
        </div>
    )
}
export default SidebarTabs