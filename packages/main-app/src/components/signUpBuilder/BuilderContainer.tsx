import React from "react";

import Container from "../../Container";
import "./builder.css";
import { StoreContext } from "../../state/signUpState";
import SidebarTabs from "./sidebar/SidebarTabs";

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
