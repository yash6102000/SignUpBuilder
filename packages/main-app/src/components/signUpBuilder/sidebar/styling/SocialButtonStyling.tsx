import {
  DownOutlined,
  MinusOutlined,
  PlusOutlined,
  UpOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../../state/signUpState";
import "../sidebar.css";
import {
  buttonStates,
  fontSizes,
  fontWeight,
  layoutType,
} from "../../../../styleConfigs";

import { AnyColorFormat } from "antd-colorpicker";
import SelectComponent from "../../../common-functions/SelectComponent";
import ColorPickerComponent from "./ColorPicker";

// import icon from '../../../assests/equallySplitLayout.svg'

const SocialButtonStyling = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  const [fontColor, setFontColor] = useState(
    signUpState.state.buttons.socialButtons?.fontColor
  );
  const [bgColor, setBgColor] = useState(
    signUpState.state.buttons.socialButtons?.backgroundColor
  );
  const [color1, setColorFont] = useState<AnyColorFormat>({
    hex: "#000000",
  });
  const [color2, setColorBg] = useState<AnyColorFormat>({
    hex: "#FFFFFF",
  });

  const onFontChnage = (colors: AnyColorFormat) => {
    setColorFont(colors), setFontColor(colors.hex);
  };
  const onBgChange = (colors: AnyColorFormat) => {
    setColorBg(colors), setBgColor(colors.hex);
  };

  function onSiteChanged(e: any) {
    signUpState.setState({
      ...signUpState.state,
      buttons: (signUpState.state.buttons.socialButtons.layout.layoutType =
        e.target.value),
    });
  }

  const handleFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        socialButtons: {
          ...signUpState.state.buttons.socialButtons,
          fontSize: (signUpState.state.buttons.socialButtons.fontSize = value),
        },
      },
    });
  };
  const handleFontWeight = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        socialButtons: {
          ...signUpState.state.buttons.socialButtons,
          fontWeight: (signUpState.state.buttons.socialButtons.fontWeight =
            value),
        },
      },
    });
  };
  useEffect(() => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        socialButtons: {
          ...signUpState.state.buttons.socialButtons,
          fontColor: (signUpState.state.buttons.socialButtons.fontColor =
            fontColor),
        },
      },
    });
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        socialButtons: {
          ...signUpState.state.buttons.socialButtons,
          backgroundColor:
            (signUpState.state.buttons.socialButtons.backgroundColor = bgColor),
        },
      },
    });
  }, [fontColor, setFontColor, bgColor, setBgColor]);

  const handleChange = (value: string | string[]) => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        socialButtons: {
          ...signUpState.state.buttons.socialButtons,
          buttonState: (signUpState.state.buttons.socialButtons.buttonState =
            value),
        },
      },
    });
  };
  const [currentAccordian, setCurrentAccordian] = useState(1);
  return (
    <div className="flex flex-col pb-5 gap-5">
      <div
        className="flex gap-2 items-center"
        onKeyUp={(e) => {
          if (e.key === "Enter")
            setCurrentAccordian(
              currentAccordian === 1 ? -1 : currentAccordian === -1 ? 1 : -1
            );
        }}
        onClick={() => {
          setCurrentAccordian(
            currentAccordian === 1 ? -1 : currentAccordian === -1 ? 1 : -1
          );
        }}
      >
        <span className="text-xs text-[#000000d9] font-medium">
          Social Button Styling
        </span>

        {currentAccordian === 1 ? (
          <UpOutlined className="text-black" />
        ) : (
          <DownOutlined className="text-black" />
        )}
      </div>
      {/* {position} */}
      <div
        className={
          "overflow-scroll flex flex-col gap-5 text-gray-600 transition-all " +
          (currentAccordian === 1 ? "h-full" : "max-h-0")
        }
      >
        <div className="flex justify-between w-full items-center">
          <span className="text-xs text-[#000000d9] font-medium">Position</span>

          <div className={`flex  gap-2 items-center`}>
            <VerticalAlignTopOutlined
              onClick={() => {
                signUpState.setState({
                  ...signUpState.state,
                  buttons: {
                    ...signUpState.state.buttons,
                    socialButtons: {
                      ...signUpState.state.buttons.socialButtons,
                      position: {
                        ...signUpState.state.buttons.socialButtons?.position,
                        top: (signUpState.state.buttons.socialButtons.position.top =
                          true),
                      },
                    },
                  },
                });
                signUpState.setState({
                  ...signUpState.state,
                  buttons: {
                    ...signUpState.state.buttons,
                    socialButtons: {
                      ...signUpState.state.buttons.socialButtons,
                      position: {
                        ...signUpState.state.buttons.socialButtons?.position,
                        bottom:
                          (signUpState.state.buttons.socialButtons.position.bottom =
                            false),
                      },
                    },
                  },
                });
              }}
              className={`w-4 h-4 cursor-pointer ${
                signUpState.state.buttons.socialButtons.position.top === true
                  ? "text-blue-600"
                  : "text-black"
              }`}
            />
            <VerticalAlignBottomOutlined
              className={`w-4 h-4 cursor-pointer ${
                signUpState.state.buttons.socialButtons.position.bottom === true
                  ? "text-blue-600"
                  : "text-black"
              }`}
              onClick={() => {
                signUpState.setState({
                  ...signUpState.state,
                  buttons: {
                    ...signUpState.state.buttons,
                    socialButtons: {
                      ...signUpState.state.buttons.socialButtons,
                      position: {
                        ...signUpState.state.buttons.socialButtons.position,
                        top: (signUpState.state.buttons.socialButtons.position.top =
                          false),
                      },
                    },
                  },
                });
                signUpState.setState({
                  ...signUpState.state,
                  buttons: {
                    ...signUpState.state.buttons,
                    socialButtons: {
                      ...signUpState.state.buttons.socialButtons,
                      position: {
                        ...signUpState.state.buttons.socialButtons.position,
                        bottom:
                          (signUpState.state.buttons.socialButtons.position.bottom =
                            true),
                      },
                    },
                  },
                });
              }}
            />
          </div>
        </div>
        {/* {Layout} */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-[#000000d9] font-medium">Layout</span>
          <div className="flex gap-2 items-center">
            {layoutType.map((data: any) => {
              return (
                <div key={data.layout}>
                  <div
                    onClick={() =>
                      signUpState.setState({
                        ...signUpState.state,
                        buttons: {
                          ...signUpState.state.buttons,
                          socialButtons: {
                            ...signUpState.state.buttons.socialButtons,
                            layout: {
                              ...signUpState.state.buttons.socialButtons.layout,
                              layoutType: data.layout,
                            },
                          },
                        },
                      })
                    }
                    className={`flex gap-4 h-[88px] relative justify-center items-center  w-24 p-1  border border-gray-300 rounded`}
                  >
                    <input
                      className="absolute top-2 left-2"
                      type="radio"
                      value={data.layout}
                      checked={
                        signUpState.state.buttons.socialButtons.layout
                          .layoutType === data.layout
                      }
                      onChange={onSiteChanged}
                    />
                    {data.image}
                  </div>

                  <span className="text-gray-400">{data.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-xs text-[#000000d9] font-medium">Styling</h4>
          <div className="flex  flex-col gap-4">
            <SelectComponent
              defaultValue={"Default State"}
              onChange={handleChange}
              options={buttonStates}
            />

            <SelectComponent
              label={"Font Size"}
              defaultValue={"14px"}
              onChange={handleFontSize}
              options={fontSizes}
            />
            <SelectComponent
              label={"Font Weight"}
              defaultValue={"semibold"}
              onChange={handleFontWeight}
              options={fontWeight}
            />
            <ColorPickerComponent
              label="Font Color"
              value={color1}
              popup={true}
              onChange={onFontChnage}
              fontColor={fontColor}
            />
            <ColorPickerComponent
              label="Background Color"
              value={color2}
              popup={true}
              onChange={onBgChange}
              fontColor={bgColor}
            />

            <div className="flex  items-center">
              <span className="text-xs w-2/4  text-[#00000073]">
                Border Radius
              </span>
              <div className="flex items-center w-2/4 gap-2">
                <div className="flex border border-[#D9D9D9] bg-white py-1.5 px-3 gap-6 items-center">
                  <MinusOutlined
                    className="border flex justify-center items-center rounded-[50px] h-5 w-5 bg-[#F0F5FF]"
                    onClick={() =>
                      signUpState.setState({
                        ...signUpState.state,
                        buttons: {
                          ...signUpState.state.buttons,
                          socialButtons: {
                            ...signUpState.state.buttons.socialButtons,
                            borderRadius:
                              signUpState.state.buttons.socialButtons
                                .borderRadius > 0
                                ? signUpState.state.buttons.socialButtons
                                    ?.borderRadius - 1
                                : 0,
                          },
                        },
                      })
                    }
                  />

                  <span className="flex items-center text-xs">
                    {signUpState.state.buttons.socialButtons?.borderRadius >
                      0 &&
                    signUpState.state.buttons.socialButtons?.borderRadius < 10
                      ? `0${signUpState.state.buttons.socialButtons.borderRadius}`
                      : signUpState.state.buttons.socialButtons.borderRadius}
                  </span>

                  <PlusOutlined
                    className="border rounded-[50px] flex justify-center items-center h-5 w-5 bg-[#F0F5FF]"
                    onClick={() =>
                      signUpState.setState({
                        ...signUpState.state,
                        buttons: {
                          ...signUpState.state.buttons,
                          socialButtons: {
                            ...signUpState.state.buttons.socialButtons,
                            borderRadius:
                              signUpState.state.buttons.socialButtons
                                .borderRadius + 1,
                          },
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialButtonStyling;
