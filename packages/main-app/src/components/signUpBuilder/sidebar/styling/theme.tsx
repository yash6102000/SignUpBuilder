import React from "react";
import { StoreContext } from "../../../../state/signUpState";
import { themeBox } from "../../../../styleConfigs";
const Theme = () => {
  const { signUpState }:any = React.useContext(StoreContext)
 

  function onSiteChanged(e: any) {
    signUpState.setState({ ...signUpState.state, theme: (signUpState.state.theme.color = e.target.value) });
  }
  return (
    <div className="flex px-5 gap-2 items-center">
      {themeBox.map((data: any) => {
        return (
          <div key={data.value}>
            <div
              onClick={() =>
                signUpState.setState({
                  ...signUpState.state,
                  theme: {
                    ...signUpState.state.theme,
                    color: data.value,
                  },
                })
              }
              className={`flex gap-4 h-[88px]  w-24  p-1 items-start border border-gray-300 rounded ${data.bg}`}
            >
              <input
                type="radio"
                value={data.value}
                checked={signUpState.state.theme.color===data.value}
                onChange={onSiteChanged}
                
              />
            </div>
            <span className="text-xs  text-[#00000073]">{data.text}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Theme;
