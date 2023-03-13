import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../../state/signUpState";
// import googleIcon from '../../..'

const SocialLogin = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  // Add/Remove checked item from list
  const socialButtonOptions = [
    {
      label: "Google",
      value: "google",
      logo: "logos:google-icon",
      checked: false,
    },
    {
      label: "Apple",
      value: "apple",
      logo: "logos:google-icon",
      checked: false,
    },
    { label: "Git", value: "git", logo: "logos:google-icon", checked: false },
    { label: "Linkedin", value: "linkedin", logo: "logos:google-icon", checked: false },
  ];
  const [checked, setChecked]: any = useState(socialButtonOptions);
  const updateCheckStatus = (index: any) => {
    setChecked(
      checked.map((checked: any, currentIndex: any) =>
        currentIndex === index
          ? { ...checked, checked: !checked.checked }
          : checked
      ),

      console.log(filterData, "filterData")
    );
  };
  const filterData = checked.filter((data: any) => {
    return data.checked === true;
  });
  
  console.log(filterData, "filterData");
  useEffect(() => {
    signUpState.setState({
      ...signUpState.state,
      socialLoginButton: (signUpState.state.socialLoginButton = filterData),
    });
  }, [checked]);
  console.log(signUpState.state.socialLoginButton, "signUpState.state.socialLoginButton");
  return (
    <div className="flex flex-col gap-2.5">
      <div>
        <h2 className="text-sm font-medium">Social Logins (1/4)</h2>
        <span className="text-xs font-normal text=[#00000073]">
          You can select only 4 social logins.
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {checked.map((data: any, index: number) => {
          return (
            <div key={data.value} className="flex gap-3">
              <input
                className="w-4 h-4"
                onChange={() => updateCheckStatus(index)}
                value={data.value}
                checked={data.checked}
                type="checkbox"
                name={data.value}
              />
              {data.logo}
              <span className="font-normal text-xs">{data.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SocialLogin;
