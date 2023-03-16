import { AnyColorFormat, Colorpicker } from "antd-colorpicker";
import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../../state/signUpState";
import ColorPickerComponent from "./ColorPicker";

const Colors = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  const [primaryColor, setPrimaryColor] = useState(
    signUpState.state.colors.primary
  );
  const [errorColor, setErrorColor] = useState(signUpState.state.colors.error);
  const [color1, seColorPrimary] = useState<AnyColorFormat>({
    hex: "#2F54EB",
  });
  const [color2, setError] = useState<AnyColorFormat>({
    hex: "#DC6264",
  });

  const onPrimaryChange = (colors: AnyColorFormat) => {
    seColorPrimary(colors), setPrimaryColor(colors.hex);
  };
  const onErrorColorChange = (colors: AnyColorFormat) => {
    setError(colors), setErrorColor(colors.hex);
  };
  const onSecondryChange = (colors: AnyColorFormat) => {
console.log('hi')
  };
  const color3='#000000'
  useEffect(() => {
    signUpState.setState({
      ...signUpState.state,
      colors: {
        ...signUpState.state.colors,
        primary: (signUpState.state.colors.primary = primaryColor),
      },
    });
    signUpState.setState({
      ...signUpState.state,
      colors: {
        ...signUpState.state.colors,
        error: errorColor,
      },
    });
  }, [primaryColor, setPrimaryColor, errorColor, setErrorColor]);
  return (
    <div className="px-5">
      <ColorPickerComponent
        label="Primary Color"
        value={color1}
        popup={true}
        onChange={onPrimaryChange}
        fontColor={primaryColor}
      />
      <ColorPickerComponent
        label="Secondry Color"
        value={color3}
        popup={true}
        onChange={onSecondryChange}
        fontColor={''}
      />
      <ColorPickerComponent
        label="Error Color"
        value={color2}
        popup={true}
        onChange={onErrorColorChange}
        fontColor={errorColor}
      />
    </div>
  );
};
export default Colors;
