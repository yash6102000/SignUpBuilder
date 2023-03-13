import React from "react";
import { StoreContext } from "../../../../state/signUpState";
import { Icon } from '@iconify/react';
const EmailPassLogin = () => {
    const { signUpState }: any = React.useContext(StoreContext);
  const emailPassData = [
    {
      label: "Magic Link ",
      value: "magicLink ",

      logo: "logos:google-icon",
    },
    {
      label: "Magic Code",
      value: "magicCode",
      logo: "logos:google-icon",
    },
    {
      label: "Enable Password Login",
      value: "enablePasswordLogin",
      logo: "logos:google-icon",
    },
  ];
  function onSiteChanged(e: any) {
    signUpState.setState({
        ...signUpState.state,
        emailPassLogin: (signUpState.state.emailPassLogin = e.target.value),
      })
  }
  return (
    <div className="flex gap-3 p-6  flex-col">
      <h2 className="text-sm font-medium text-[#000000d9]">
      Work Email & Password-less Logins
      </h2>
      <div className="flex flex-col gap-3">
            {emailPassData.map((data: any) => {
              return (
                <div key={data.layout} >
                  <div
                    onClick={() =>
                        signUpState.setState({
                            ...signUpState.state,
                            emailPassLogin: (signUpState.state.emailPassLogin = data.value),
                          })
                    }
                    className="flex items-center gap-3"
                  >
                    <input
                      type="radio"
                      value={data.value}
                      checked={
                        signUpState.state.emailPassLogin === data.value
                      }
                      onChange={onSiteChanged}
                    />
                     <Icon className="w-5 h-5" icon={data.logo} />
                     <span className="font-normal text-xs">{data.label}</span>
                  </div>

                 
                </div>
              );
            })}
          </div>
    </div>
  );
};
export default EmailPassLogin;
