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
  RedoOutlined,
  TabletOutlined,
  UndoOutlined,
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

  return (
    <div className="w-full">
      <div className="bg-[#F0F5FF] py-7 flex px-5 flex-col gap-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <RedoOutlined />
            <hr className="h-5 w-px bg-[#ADC6FF]" />
            <UndoOutlined />
          </div>
          <div className="flex gap-4 items-center">
            <MobileOutlined
              tabIndex={0}
              aria-label="mobile view button"
              onClick={mobileChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") mobileChange();
              }}
              className={`${
                signUpState.state.viewPort.mobile && "text-blue-600"
              }`}
            />
            <hr className="h-5 w-px bg-[#ADC6FF]" />
            <TabletOutlined
              tabIndex={0}
              aria-label="tablet view button"
              onClick={tabletChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") tabletChange();
              }}
              className={`${
                signUpState.state.viewPort.tablet && "text-blue-600"
              }`}
            />
            <hr className="h-5 w-px bg-[#ADC6FF]" />
            <DesktopOutlined
              tabIndex={0}
              aria-label="desktop view button"
              onClick={desktopChange}
              onKeyUp={(e) => {
                if (e.key=== "Enter") desktopChange();
              }}
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
                  tabIndex={0}
                  aria-label="fullscreen view"
                  onClick={ExitFullScreenChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") ExitFullScreenChange();
                  }}
                  className="cursor-pointer"
                />
              ) : (
                <FullscreenOutlined
                  tabIndex={0}
                  aria-label="exit fullscreen view"
                  onClick={fullScreenChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") fullScreenChange();
                  }}
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
                className={`self-center`}
                data={signUpState.state}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
export default Container;
