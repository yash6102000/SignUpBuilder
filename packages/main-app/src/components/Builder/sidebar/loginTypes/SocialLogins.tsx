import React from "react";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { GoogleOutlined } from "@ant-design/icons";

const SocialLogin = () => {
  const onChange = (e: any) => {
    let isChecked = e.target.checked;
    console.log("checked = ", isChecked);
  };
  const options = [
    { label: "Google", value: "google", logo: <GoogleOutlined /> },
    { label: "Apple", value: "apple", logo: <GoogleOutlined /> },
    { label: "Git", value: "git", logo: <GoogleOutlined /> },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-sm font-medium">Social Logins (1/4)</h2>
        <span className="text-xs font-normal text=[#00000073]">
          You can select only 4 social logins.
        </span>
      </div>
      <div>
        {options.map((data: any) => {
          return (
            <div key={data.value}>
              <input onChange={() => onChange} type="checkbox" name="" id="" />
              <img src={data.logo} alt="" />
              <span>{data.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SocialLogin;
