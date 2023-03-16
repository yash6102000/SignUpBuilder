import React, { useState } from 'react';
//@ts-ignore
import  { MenuProps,Menu } from 'antd';
//@ts-ignore
import Theme from './styling/theme';
import "./sidebar.css"
import ButtonStyling from './styling/ButtonStyling';
import Colors from './styling/Colors';
import LogoImageStyling from './styling/LogoImageStyling';
import InputFieldStyling from './styling/InputFieldStyling';
import Typography from './styling/Typography';
import LayoutStyling from './styling/LayoutStyling';


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
    getItem('Layout', 'sub2','',[
      getItem(<LayoutStyling/>, '2'),
      
     ]),
    getItem('Buttons', 'sub3','',[
     getItem(<ButtonStyling/>, '3'),
     
    ]),
    getItem('Logo Image', 'sub4','',[
      getItem(<LogoImageStyling/>, '4')
    ]),
    getItem('Colors', 'sub5','',[
      getItem(<Colors/>, '5')
    ]),
    getItem('Input Field', 'sub6','',[
      getItem(<InputFieldStyling/>, '6')
    ]),  getItem('Typography', 'sub7','',[
      getItem(<Typography/>, '7')
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
      style={{ width: "auto" ,fontSize:'14px'}}
      items={items}
    />
  );
};

export default Sidebar;