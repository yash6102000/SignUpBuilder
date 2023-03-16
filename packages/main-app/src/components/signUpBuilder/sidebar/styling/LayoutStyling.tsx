import React, { useState } from "react";
import { customLayoutData } from "../../../../styleConfigs";
import ColorPickerComponent from "./ColorPicker";

const LayoutStyling = () => {
  const [checked, setChecked]: any = useState(customLayoutData);
  const updateCheckStatus = (index: any) => {
    setChecked(
      checked.map((checked: any, currentIndex: any) =>
        currentIndex === index
          ? { ...checked, checked: !checked.checked }
          : checked
      )
    );
  };
  const filterData = checked.filter((data: any) => {
    return data.checked === true;
  });
  return (
    <div className="p-5 pt-0 flex flex-col gap-4">
      <div className="gap-1 flex flex-col">
        <span className="text-sm font-normal text-[#000000d9]">
          Custom Layouts for Content
        </span>
        <span className="text-xs text-[#00000073]">
          You can select up-to 2 layouts.
        </span>
      </div>
        <div className="flex border-dashed border-b border-[#0000000f] pb-5 flex-wrap gap-3">
          {checked.map((data: any, index: number) => {
            return (
              <div
                key={data.value}
                className="flex  w-[88px] flex-col gap-3"
              >
                <div
                  onClick={() => updateCheckStatus(index)}
                  className={` h-[88px] ${
                    data.checked ? "border-blue-600" : "border-gray-100"
                  } border-gray-100 border shadow-md rounded relative`}
                >
                  <input
                    className=" border-gray-300 absolute top-1.5 left-1.5 bg-gray-200"
                    value={data.value}
                    checked={data.checked}
                    type="checkbox"
                    name={data.value}
                  />
                </div>
                <div className="gap-1 flex items-center">
                  {" "}
                  <span className="font-normal whitespace-normal text-xs text-[#00000073]">
                    {data.label}
                  </span>
                  <span className="text-[#1890FF]">{data.logo}</span>
                  
                </div>
              </div>
            );
          })}
        </div>

  
    <ColorPickerComponent label="Background" value={''} onChange={''} fontColor={''} popup={true} />

    </div>
  );
};
export default LayoutStyling;
