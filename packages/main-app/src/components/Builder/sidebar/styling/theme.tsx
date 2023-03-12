import React from "react";
import { StoreContext } from "../../../../state/signUpState";
const Theme = () => {
  const { signUpState }:any = React.useContext(StoreContext)
  const themeBox = [
    {
      bg: "bg-white",
      value: "light",
      text: "Light",
    },
    {
      bg: "bg-black",
      value: "dark",
      text: "Dark",
    },
    {
      bg: "bg-gray-400",
      value: "texture",
      text: "Texture",
    },
  ];

  function onSiteChanged(e: any) {
    signUpState.setState({ ...signUpState.state, theme: (signUpState.state.theme.color = e.target.value) });
  }
  return (
    <div className="flex p-5 gap-2 items-center">
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
              className={`flex gap-4 h-[88px]  w-24 flex p-1 items-start border border-gray-300 rounded ${data.bg}`}
            >
              <input
                type="radio"
                value={data.value}
                checked={signUpState.state.theme.color===data.value}
                onChange={onSiteChanged}
                
              />
            </div>
            <span className="text-gray-400">{data.text}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Theme;
