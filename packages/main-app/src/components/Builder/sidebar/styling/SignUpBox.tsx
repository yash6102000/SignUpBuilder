import { AnyColorFormat, Colorpicker } from "antd-colorpicker";
import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../../state/signUpState";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
const SignUpBox = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  const [bgColor, setBgColor] = useState(
    signUpState.state.signUpBox.backgroundColor
  );
  const [bg, setBg] = useState<AnyColorFormat>({
    hex: "#FFFFFF",
  });

  const onBgChange = (colors: AnyColorFormat) => {
    setBg(colors), setBgColor(colors.hex);
  };

  useEffect(() => {
    signUpState.setState({
      ...signUpState.state,
      signUpBox: {
        ...signUpState.state.signUpBox,
        backgroundColor: (signUpState.state.signUpBox.backgroundColor =
          bgColor),
      },
    });
  }, [bgColor, setBgColor]);

  const boxShadowArray = [
    {
      label: "",
      shadow: "",
    },
    { label: "S", shadow: "0px 2px 8px rgba(0, 0, 0, 0.15)" },
    {
      label: "M",
      shadow:
        "0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)",
    },
    {
      label: "L",
      shadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
    },
  ];
  console.log(signUpState.state.signUpBox.boxShadow ,'signUpState.state.signUpBox.boxShadow ')
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-600">Background Color</span>
        <div className="flex items-center gap-2">
          <Colorpicker
            blockStyles={{
              width: "24px",
              height: "24px",
            }}
            value={bg}
            popup={true}
            onChange={onBgChange}
          />
          <span className="text-black">{bgColor}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-600">Box Border</span>
        <div className="flex items-center gap-2">
          <div className="flex border border-[#D9D9D9] bg-white py-1.5 px-3 gap-6 items-center">
            <MinusOutlined
              className="border flex justify-center items-center rounded-[50px] h-5 w-5 bg-[#F0F5FF]"
              onClick={() =>
                signUpState.setState({
                  ...signUpState.state,
                  signUpBox: {
                    ...signUpState.state.signUpBox,
                    boxBorder:
                      signUpState.state.signUpBox.boxBorder > 0
                        ? signUpState.state.signUpBox.boxBorder - 1
                        : 0,
                  },
                })
              }
            />

            <span className="flex items-center text-xs">
              {signUpState.state.signUpBox.boxBorder}
            </span>

            <PlusOutlined
              className="border rounded-[50px] flex justify-center items-center h-5 w-5 bg-[#F0F5FF]"
              onClick={() =>
                signUpState.setState({
                  ...signUpState.state,
                  signUpBox: {
                    ...signUpState.state.signUpBox,
                    boxBorder: signUpState.state.signUpBox.boxBorder + 1,
                  },
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span>Box Shadow</span>
        <div className="flex items-center">
          {boxShadowArray.map((data: any) => {
            return (
              <Button
                onClick={() =>
                  signUpState.setState({
                    ...signUpState.state,
                    signUpBox: {
                      ...signUpState.state.signUpBox,
                      boxShadow: (signUpState.state.signUpBox.boxShadow =
                        data.shadow),
                    },
                  })
                }
              >
                {data.label}
              </Button>
            );
          })}
          <button></button>
        </div>
      </div>
    </div>
  );
};
export default SignUpBox;
