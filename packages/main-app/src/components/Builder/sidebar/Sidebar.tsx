import React, { useState } from 'react';
//@ts-ignore
import  { MenuProps,Menu } from 'antd';
//@ts-ignore
import Theme from './styling/theme';
import "./sidebar.css"
import ButtonStyling from './styling/ButtonStyling';
import Colors from './styling/Colors';
import SignUpBox from './styling/SignUpBox';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
    
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2','sub3'];

const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
 
  const items: MenuItem[] = [
    
    getItem('Theme', 'sub1','',[
      getItem(<Theme />, '1'),
   
    ]),
    getItem('Buttons', 'sub2','',[
     getItem(<ButtonStyling/>, '2'),
     
    ]),
    getItem('Colors', 'sub3','',[
      getItem(<Colors/>, '3')
    ]),
    getItem('Sign Up Box', 'sub4','',[
      getItem(<SignUpBox/>, '4')
    ]),
  ];

  const onOpenChange: MenuProps['onOpenChange'] = (keys:any) => {
    const latestOpenKey = keys.find((key:any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: "auto" }}
      items={items}
    />
  );
};

export default Sidebar;