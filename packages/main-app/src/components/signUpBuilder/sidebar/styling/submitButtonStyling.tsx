import {
  DownOutlined,
  MinusOutlined,
  PlusOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { StoreContext } from "../../../../state/signUpState";
import "../sidebar.css";
import { buttonStates, fontSizes, fontWeight } from "../../../../styleConfigs";
import { AnyColorFormat, Colorpicker } from "antd-colorpicker";
import React from "react";
import SelectComponent from "../../../common-functions/SelectComponent";
import ColorPickerComponent from "./ColorPicker";
const SubmitButtonStying = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  const [fontColor, setFontColor] = useState(
    signUpState.state.buttons.submitButton?.fontColor
  );
  const [bgColor, setBgColor] = useState(
    signUpState.state.buttons.submitButton?.backgroundColor
  );
  const [color1, setColorFont] = useState<AnyColorFormat>({
    hex: "#FFFFFF",
  });
  const [color2, setColorBg] = useState<AnyColorFormat>({
    hex: "#070930",
  });

  const onFontChnage = (colors: AnyColorFormat) => {
    setColorFont(colors), setFontColor(colors.hex);
  };
  const onBgChange = (colors: AnyColorFormat) => {
    setColorBg(colors), setBgColor(colors.hex);
  };
  const themeBox = [
    {
      layout: "Equally-Split",
      text: "Equally Split",
    },
    {
      layout: "One-Primary",
      text: "One Primary",
    },
  ];

  function onSiteChanged(e: any) {
    signUpState.setState({
      ...signUpState.state,
      buttons: (signUpState.state.buttons.submitButton.layout.layoutType =
        e.target.value),
    });
  }

  const handleFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        submitButton: {
          ...signUpState.state.buttons.submitButton,
          fontSize: (signUpState.state.buttons.submitButton.fontSize = value),
        },
      },
    });
  };
  const handleFontWeight = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        submitButton: {
          ...signUpState.state.buttons.submitButton,
          fontWeight: (signUpState.state.buttons.submitButton.fontWeight =
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
        submitButton: {
          ...signUpState.state.buttons.submitButton,
          fontColor: (signUpState.state.buttons.submitButton.fontColor =
            fontColor),
        },
      },
    });
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        submitButton: {
          ...signUpState.state.buttons.submitButton,
          backgroundColor:
            (signUpState.state.buttons.submitButton.backgroundColor = bgColor),
        },
      },
    });
  }, [fontColor, setFontColor, bgColor, setBgColor]);
  const handleChange = (value: string | string[]) => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.buttons,
        submitButton: {
          ...signUpState.state.buttons.submitButton,
          buttonState: (signUpState.state.buttons.submitButton.buttonState =
            value),
        },
      },
    });
  };

  const [currentAccordian, setCurrentAccordian] = useState(-1);
  return (
    <div className="flex py-5  border-t-2 border-dashed border-[#D9D9D9] flex-col gap-5">
      <div
        className="flex gap-2 items-center"
        onKeyUp={(e) => {
          if (e.key === "Enter")
            setCurrentAccordian(
              currentAccordian === -1 ? 1 : currentAccordian === 1 ? -1 : 1
            );
        }}
        onClick={() => {
          setCurrentAccordian(
            currentAccordian === -1 ? 1 : currentAccordian === 1 ? -1 : 1
          );
        }}
      >
        <span className="text-xs text-black">Submit Button Styling</span>

        {currentAccordian === 1 ? (
          <UpOutlined className="text-black" />
        ) : (
          <DownOutlined className="text-black" />
        )}
      </div>
      <div
        className={
          "overflow-scroll flex flex-col gap-5 text-gray-600 transition-all " +
          (currentAccordian === 1 ? "h-full" : "max-h-0")
        }
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
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
              <div className="flex w-2/4 items-center gap-2">
                <div className="flex border border-[#D9D9D9] bg-white py-1.5 px-3 gap-6 items-center">
                  <MinusOutlined
                    className="border flex justify-center items-center rounded-[50px] h-5 w-5 bg-[#F0F5FF]"
                    onClick={() =>
                      signUpState.setState({
                        ...signUpState.state,
                        buttons: {
                          ...signUpState.state.buttons,
                          submitButton: {
                            ...signUpState.state.buttons.submitButton,
                            borderRadius:
                              signUpState.state.buttons.submitButton
                                .borderRadius > 0
                                ? signUpState.state.buttons.submitButton
                                    .borderRadius - 1
                                : 0,
                          },
                        },
                      })
                    }
                  />

                  <span className="flex items-center text-xs">
                    {signUpState.state.buttons.socialButtons.borderRadius > 0 &&
                    signUpState.state.buttons.socialButtons.borderRadius < 10
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
                          submitButton: {
                            ...signUpState.state.buttons.submitButton,
                            borderRadius:
                              signUpState.state.buttons.submitButton
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
      </div>{" "}
    </div>
  );
};
export default SubmitButtonStying;
