import React, { useState } from "react";
import { AnyColorFormat } from "antd-colorpicker";
import { Colorpicker } from "antd-colorpicker";

const ColorPickerComponent = (setFontColors?: any, setBgColors?: any) => {
  const [color, setColor] = useState<AnyColorFormat>({
    hex: "#2F54EB",
  });

  const onChange = (colors: AnyColorFormat) => {
    setColor(colors), setFontColors(colors.hex), setBgColors(colors.hex);
  };
  return <Colorpicker value={color} popup={true} onChange={onChange} />;
};

export default ColorPickerComponent;
