import React from "react";
import SidebarTabs from "./sidebar/SidebarTabs";
import Container from "../../Container";
import "../Builder/builder.css";
import { StoreContext } from "../../state/signUpState";

const BuilderContainer = () => {
  const { signUpState }: any = React.useContext(StoreContext);

  return (
    <div className="flex">
      <div className="flex flex-1" id="builder-container">
        <Container />
      </div>
      {!signUpState.state.viewPort.fullScreen && (
        <div className="w-[355px]" >
          <SidebarTabs />
        </div>
      )}
    </div>
  );
};
export default BuilderContainer;
