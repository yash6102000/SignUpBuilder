import {  SelectProps } from "antd";
import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../../state/signUpState";
import { AnyColorFormat } from "antd-colorpicker";
import {  fontSizes, fontWeight } from "../../../../styleConfigs";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import SelectComponent from "../../../common-functions/SelectComponent";
import ColorPickerComponent from "./ColorPicker";
const InputFieldStyling = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  const [fontColor, setFontColor] = useState(
    signUpState.state.inputField.fontColor
  );
  const [labelFontColors, setLabelFontColor] = useState(
    signUpState.state.inputField.labelFontColor
  );
  const [bgColor, setBgColor] = useState(
    signUpState.state.inputField.backgroundColor
  );
  const [color1, setColorFont] = useState<AnyColorFormat>({
    hex: "#FFFFFF",
  });
  const [color2, setColorBg] = useState<AnyColorFormat>({
    hex: "#000000",
  });
  const [color3, setLabelColor] = useState<AnyColorFormat>({
    hex: "#00000099",
  });

  const onFontChnage = (colors: AnyColorFormat) => {
    setColorFont(colors), setFontColor(colors.hex);
  };
  const onBgChange = (colors: AnyColorFormat) => {
    setColorBg(colors), setBgColor(colors.hex);
  };
  const onLabelFontChange = (colors: AnyColorFormat) => {
    setLabelColor(colors), setLabelFontColor(colors.hex);
  };
  useEffect(() => {
    signUpState.setState({
      ...signUpState.state,
      inputField: {
        ...signUpState.state.inputField,
        fontColor: (signUpState.state.inputField.fontColor = fontColor),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      inputField: {
        ...signUpState.state.inputField,
        backgroundColor: (signUpState.state.inputField.backgroundColor =
          bgColor),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      inputField: {
        ...signUpState.state.inputField,
        labelFontColor: (signUpState.state.inputField.labelFontColor =
          labelFontColors),
      },
    });
  }, [
    fontColor,
    setFontColor,
    bgColor,
    setBgColor,
    labelFontColors,
    setLabelColor,
  ]);
  const handleChange = (value: string | string[]) => {
    signUpState.setState({
      ...signUpState.state,
      inputField: {
        ...signUpState.state.inputField,
        fieldState: (signUpState.state.inputField.fieldState = value),
      },
    });
  };
  const handleFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      inputField: {
        ...signUpState.state.inputField,
        fontSize: (signUpState.state.inputField.fontSize = value),
      },
    });
  };
  const handleLabelFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      inputField: {
        ...signUpState.state.inputField,
        labelFontSize: (signUpState.state.inputField.labelFontSize = value),
      },
    });
  };
  const handleFontWeight = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      inputField: {
        ...signUpState.state.inputField,
        fontWeight: (signUpState.state.inputField.fontWeight = value),
      },
    });
  };
  const handleLabelFontWeight = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      inputField: {
        ...signUpState.state.inputField,
        labelFontWeight: (signUpState.state.inputField.labelFontWeight = value),
      },
    });
  };
  const fieldState: SelectProps["options"] = [
    {
      label: "Placeholder Empty",
      value: "",
    },
    {
      label: "Enter Email",
      value: "Enter your email",
    },
  ];
  return (
    <div className="flex flex-col px-5 gap-4">
      <SelectComponent
        label={"Field State"}
        defaultValue={""}
        onChange={handleChange}
        options={fieldState}
      />

      <SelectComponent
        label={"Font Size"}
        defaultValue={"14px"}
        onChange={handleFontSize}
        options={fontSizes}
      />
      <SelectComponent
        label={"Font Weight"}
        defaultValue={"regular"}
        onChange={handleFontWeight}
        options={fontWeight}
      />

     
      <ColorPickerComponent label="Font Color"value={color1} popup={true} onChange={onFontChnage} fontColor={fontColor} />
      <ColorPickerComponent label="Background Color"value={color2} popup={true} onChange={onBgChange} fontColor={bgColor} />
    
      <div className="flex  items-center">
        <span className="text-xs w-2/4  text-[#00000073]">Box Border</span>
        <div className="flex items-center w-2/4 gap-2">
          <div className="flex border border-[#D9D9D9] bg-white py-1.5 px-3 gap-6 items-center">
            <MinusOutlined
              className="border flex justify-center items-center rounded-[50px] h-5 w-5 bg-[#F0F5FF]"
              onClick={() =>
                signUpState.setState({
                  ...signUpState.state,
                  inputField: {
                    ...signUpState.state.inputField,
                    boxBorder: (signUpState.state.inputField.boxBorder =
                      signUpState.state.inputField.boxBorder > 0
                        ? signUpState.state.inputField.boxBorder - 1
                        : 0),
                  },
                })
              }
            />

            <span className="flex items-center text-xs">
              {signUpState.state.inputField.boxBorder}
            </span>

            <PlusOutlined
              className="border rounded-[50px] flex justify-center items-center h-5 w-5 bg-[#F0F5FF]"
              onClick={() =>
                signUpState.setState({
                  ...signUpState.state,
                  inputField: {
                    ...signUpState.state.inputField,
                    boxBorder: signUpState.state.inputField.boxBorder + 1,
                  },
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex  items-center">
        <span className="text-xs w-2/4  text-[#00000073]">Border Radius</span>
        <div className="flex w-2/4 items-center gap-2">
          <div className="flex border border-[#D9D9D9] bg-white py-1.5 px-3 gap-6 items-center">
            <MinusOutlined
              className="border flex justify-center items-center rounded-[50px] h-5 w-5 bg-[#F0F5FF]"
              onClick={() =>
                signUpState.setState({
                  ...signUpState.state,
                  inputField: {
                    ...signUpState.state.inputField,
                    borderRadius:
                      signUpState.state.inputField.borderRadius > 0
                        ? signUpState.state.inputField.borderRadius - 1
                        : 0,
                  },
                })
              }
            />

            <span className="flex items-center text-xs">
              {signUpState.state.inputField.borderRadius > 0 &&
              signUpState.state.inputField.borderRadius < 10
                ? `0${signUpState.state.inputField.borderRadius}`
                : signUpState.state.inputField.borderRadius}
            </span>

            <PlusOutlined
              className="border rounded-[50px] flex justify-center items-center h-5 w-5 bg-[#F0F5FF]"
              onClick={() =>
                signUpState.setState({
                  ...signUpState.state,
                  inputField: {
                    ...signUpState.state.inputField,
                    borderRadius: signUpState.state.inputField.borderRadius + 1,
                  },
                })
              }
            />
          </div>
        </div>
      </div>
      <SelectComponent
        label={"Label Font State"}
        defaultValue={"14px"}
        onChange={handleLabelFontSize}
        options={fontSizes}
      />

      <SelectComponent
        label={"Label Font Weight"}
        defaultValue={"regular"}
        onChange={handleLabelFontWeight}
        options={fontWeight}
      />
 <ColorPickerComponent label="Label Font Color"value={color3} popup={true} onChange={onLabelFontChange} fontColor={labelFontColors} />
      
    </div>
  );
};
export default InputFieldStyling;
