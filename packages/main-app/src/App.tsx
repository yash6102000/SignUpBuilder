import React from "react";
import { FormComponent, defineCustomElements } from "react-library";
import Sidebar from "./components/sidebar/Sidebar";
import "./index.scss";
import Header from "./Header";
import StoreProvider from "../src/state/signUpState";
import { StoreContext } from "../src/state/signUpState";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import { Tabs, TabsProps } from "antd";
import SidebarTabs from "./components/sidebar/SidebarTabs";

//@ts-ignore
defineCustomElements();
const App = () => {
  const { signUpState }: any = React.useContext(StoreContext);
 
  return (
    <div className="flex flex-col">
      <React.Suspense fallback="loading.....">
        <Header />
        <div className="flex">
          <div className="flex flex-1">
            <Container>
              <FormComponent data={signUpState.state} />
            </Container>
          </div>
          <div className="w-[355px]">
          <SidebarTabs/>
          </div>
        </div>
      </React.Suspense>
    </div>
  );
};
const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
