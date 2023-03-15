import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../../state/signUpState";
// import googleIcon from '../../..'
import { Icon } from "@iconify/react";
const SocialLogin = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  // Add/Remove checked item from list
  const socialButtonOptions = [
    {
      label: "Google",
      value: "google",
      logo: "logos:google-icon",
      checked: true,
    },
    {
      label: "Apple",
      value: "apple",
      logo: "logos:apple",
      checked: false,
    },
    { label: "Git", value: "git", logo: "logos:github-icon", checked: false },
    {
      label: "Linkedin",
      value: "linkedin",
      logo: "logos:linkedin-icon",
      checked: false,
    },
  ];
  const [checked, setChecked]: any = useState(socialButtonOptions);
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

  useEffect(() => {
    signUpState.setState({
      ...signUpState.state,
      socialLoginButton: (signUpState.state.socialLoginButton = filterData),
    });
  }, [checked]);
  return (
    <div className="flex p-6  flex-col gap-3">
      <div>
        <h2 className="text-sm font-medium text-[#000000d9]">
          Social Logins (1/4)
        </h2>
        <span className="text-xs font-normal text=[#00000073]">
          You can select only 4 social logins.
        </span>
      </div>
      <div className="flex flex-col gap-5">
        {checked.map((data: any, index: number) => {
          return (
            <div key={data.value} className="flex items-center gap-3">
              <input
                className="w-4 h-4"
                onChange={() => updateCheckStatus(index)}
                value={data.value}
                checked={data.checked}
                type="checkbox"
                name={data.value}
              />
              <div className="flex items-center gap-1">
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
export default SocialLogin;
