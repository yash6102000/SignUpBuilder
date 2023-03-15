import { Select } from "antd";
import React from "react";
const SelectComponent = ({
  label,
  defaultValue,
  onChange,
  options,
}: {
  label?: string;
  defaultValue: any;
  onChange: any;
  options: any;
}) => {
  return (
    <div className="flex items-center gap-4">
      {label && (
        <span className="text-xs w-2/4  text-[#00000073]">{label}</span>
      )}
      <Select
        className={` ${label ? "w-2/4" : "w-full"}`}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};
export default SelectComponent;
