import { AnyColorFormat, Colorpicker } from "antd-colorpicker";
import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../state/signUpState";

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
  useEffect(() => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.colors,
        primary: primaryColor,
      },
    });
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.colors,
        error:errorColor,
      },
    });
  }, [primaryColor, setPrimaryColor, errorColor, setErrorColor]);
  console.log(signUpState.state.colors,'signUpState.state.colors')
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-600">Primary Color</span>
        <div className="flex items-center gap-2">
          <Colorpicker
            blockStyles={{
              width: "24px",
              height: "24px",
            }}
            value={color1}
            popup={true}
            onChange={onPrimaryChange}
          />
          <span className="text-black">{primaryColor}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-600">Error Color</span>
        <div className="flex items-center gap-2">
          <Colorpicker
            blockStyles={{
              width: "24px",
              height: "24px",
            }}
            value={color2}
            popup={true}
            onChange={onErrorColorChange}
          />
          <span className="text-black">{errorColor}</span>
        </div>
      </div>
    </div>
  );
};
export default Colors;
