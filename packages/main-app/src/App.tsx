import React from "react";
import {  defineCustomElements } from "react-library";
import "./index.scss";
import Header from "./Header";
import StoreProvider from "../src/state/signUpState";
import { StoreContext } from "../src/state/signUpState";
import { createRoot } from "react-dom/client";
import { Tabs, TabsProps } from "antd";
import TemplateContainer from "./components/templates/TemplatesContainer";
import BuilderContainer from "./components/Builder/BuilderContainer";
import { BrowserRouter} from "react-router-dom";
//@ts-ignore
defineCustomElements();
const App = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Builder`,
      children: <BuilderContainer />,
    },
    {
      key: "2",
      label: `Templates`,
      children: <TemplateContainer />,
    },
  ];

  return (

    <BrowserRouter>
   
    <div className="flex flex-col">
        <React.Suspense fallback="loading.....">
          <Header />
          <Tabs
            defaultActiveKey="1"
            items={items}
          />
        </React.Suspense>
      </div>
    </BrowserRouter>

  );
};
const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
