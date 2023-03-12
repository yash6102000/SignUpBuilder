import { FileImageOutlined } from "@ant-design/icons";
import React from "react";
import Template1Logo from "../../assests/Template1Logo";
import { StoreContext } from "../../state/signUpState";
import { Link } from "react-router-dom";
//@ts-ignore
const TemplateContainer = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  return (
    <div className="p-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl">Your Templates</h3>
        <div className="gap-6 flex items-center">
          <a
            className="w-fit rounded-lg border cursor-pointer border-[#D9D9D9]"
            href={"/template1"}
          >
            <Template1Logo />

            <div className="flex gap-3 px-6 border-t border-b py-4 items-center ">
              <FileImageOutlined className="text-blue-600" />
              <span className="text-xs">Stealth SaaS Default Template</span>
            </div>
          </a>

          <a
            href={"/template2"}
            className="w-fit rounded-lg border cursor-pointer border-[#D9D9D9]"
          >
            <Template1Logo />

            <div className="flex gap-3 px-6 border-t border-b py-4 items-center ">
              <FileImageOutlined className="text-blue-600" />
              <span className="text-xs">Stealth SaaS Default Template</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default TemplateContainer;
