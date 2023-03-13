// import {
//   DesktopOutlined,
//   MobileOutlined,
//   TabletOutlined,
// } from "@ant-design/icons";
import React, { useEffect } from "react";
import { StoreContext } from "./state/signUpState";
import {
  DesktopOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MobileOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Navigate, Route, Routes } from "react-router-dom";
import { SecondTemplate } from "react-library";
import DefaultTemplate from "./components/templates/DefaultTemplate";
const Container = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  const fullScreenChange = () => {
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        fullScreen: (signUpState.state.viewPort.fullScreen = true),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        desktop: (signUpState.state.viewPort.desktop = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        tablet: (signUpState.state.viewPort.tablet = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        mobile: (signUpState.state.viewPort.mobile = false),
      },
    });
  };
  const ExitFullScreenChange = () => {
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        fullScreen: (signUpState.state.viewPort.fullScreen = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        desktop: (signUpState.state.viewPort.desktop = true),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        tablet: (signUpState.state.viewPort.tablet = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        mobile: (signUpState.state.viewPort.mobile = false),
      },
    });
  };
  const desktopChange = () => {
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        fullScreen: (signUpState.state.viewPort.fullScreen = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        desktop: (signUpState.state.viewPort.desktop = true),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        tablet: (signUpState.state.viewPort.tablet = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        mobile: (signUpState.state.viewPort.mobile = false),
      },
    });
  };
  const tabletChange = () => {
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        mobile: (signUpState.state.viewPort.mobile = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        tablet: (signUpState.state.viewPort.tablet = true),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        fullScreen: (signUpState.state.viewPort.fullScreen = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        desktop: (signUpState.state.viewPort.desktop = false),
      },
    });
  };
  const mobileChange = () => {
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        tablet: (signUpState.state.viewPort.tablet = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        fullScreen: (signUpState.state.viewPort.fullScreen = false),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        mobile: (signUpState.state.viewPort.mobile = true),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      viewPort: {
        ...signUpState.state.viewPort,
        desktop: (signUpState.state.viewPort.desktop = false),
      },
    });
  };
  useEffect(() => {
    fullScreenChange;
  });
  console.log(
    signUpState.state.viewPort.fullScreen,
    "signUpState.state.viewPort.fullScreen"
  );
  return (
    <div className="w-full">
      <div className="bg-[#F0F5FF] py-7 flex px-5 flex-col gap-7">
        <div className="flex justify-between items-center">
          <span>image</span>
          <div className="flex gap-4 items-center">
            <MobileOutlined
              onClick={mobileChange}
              className={`${
                signUpState.state.viewPort.mobile && "text-blue-600"
              }`}
            />
            <hr className="h-5 w-px bg-[#ADC6FF]" />
            <TabletOutlined
              onClick={tabletChange}
              className={`${
                signUpState.state.viewPort.tablet && "text-blue-600"
              }`}
            />
            <hr className="h-5 w-px bg-[#ADC6FF]" />
            <DesktopOutlined
              onClick={desktopChange}
              className={`${
                signUpState.state.viewPort.desktop && "text-blue-600"
              } pointer`}
            />
            <hr className="h-5 w-px bg-[#ADC6FF]" />
            <div className="flex gap-1.5 items-center">
              <span
                className={`text-sm ${
                  signUpState.state.viewPort.fullScreen
                    ? "text-blue-600"
                    : "text-[#434343]"
                }  `}
              >
                View Full Screen
              </span>
              {signUpState.state.viewPort.fullScreen ? (
                <FullscreenExitOutlined
                  onClick={ExitFullScreenChange}
                  className="cursor-pointer"
                />
              ) : (
                <FullscreenOutlined
                  onClick={fullScreenChange}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/template1" />} />
          <Route path="template1" element={<DefaultTemplate />} />
          <Route
            path="template2"
            element={
              <SecondTemplate
                className="self-center"
                data={signUpState.state}
              />
            }
          />
        </Routes>

        <div className="flex justify-center"></div>
      </div>
    </div>
  );
};
export default Container;
