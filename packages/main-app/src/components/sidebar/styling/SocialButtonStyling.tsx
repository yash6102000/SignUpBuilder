import { VerticalAlignBottomOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import React from "react";
import { StoreContext } from "../../../state/signUpState";

const ButtonStyling = () => {
    const { signUpState }:any = React.useContext(StoreContext)
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
      signUpState.setState({ ...signUpState.state, buttons: (signUpState.state.buttons.socialButtons.layout.layoutType = e.target.value) });
    }
    console.log(signUpState.state.buttons.socialButtons.layout.layoutType,'l')
  return (
    <div className="flex flex-col gap-5">
        {/* {position} */}
      <div className="flex justify-between w-full items-center">
        <span className="text-xs">Position</span>
        <div className="flex gap-2 items-center">
        <VerticalAlignTopOutlined className="w-4 h-4" />
        <VerticalAlignBottomOutlined />
        </div>
      </div>

      <div className="flex flex-col gap-2">

      <div className="flex gap-2 items-center">
      {themeBox.map((data: any) => {
        return (
          <div key={data.layout}>
            <div
              onClick={() =>
                signUpState.setState({
                  ...signUpState.state,
                  buttons: {
                    ...signUpState.state.buttons,
                    socialButtons: {
                      ...signUpState.state.buttons.socialButtons,
                      layout:{
                        ...signUpState.state.buttons.socialButtons.layout,
                        layoutType:data.layout
                      }
                    } 
                  
                  },
                })
              }
              className={`flex gap-4 h-[88px]  w-24 flex p-1 items-start border border-gray-300 rounded`}
            >
              <input
                type="radio"
                value={data.layout}
                checked={signUpState.state.buttons.socialButtons.layout.layoutType===data.layout}
                onChange={onSiteChanged}
                
              />
            </div>
            <span className="text-gray-400">{data.text}</span>
          </div>
        );
      })}
    </div>

      </div>
    </div>
  );
};
export default ButtonStyling;
