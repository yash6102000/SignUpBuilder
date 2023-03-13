import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../../state/signUpState";
import { Icon } from "@iconify/react";
const UserApprovel = () => {
    const { signUpState }: any = React.useContext(StoreContext);
    // Add/Remove checked item from list
    const userApprovelOptions = [
      {
        label: "Terms of Use",
        value: "termsOfUse",
        logo: "logos:google-icon",
        checked: false,
      },
      {
        label: "Privacy Policy",
        value: "privacyPolicy",
        logo: "logos:google-icon",
        checked: false,
      },
   
    ];
    const [checked, setChecked]: any = useState(userApprovelOptions);
    const updateCheckStatus = (index: any) => {
      setChecked(
        checked.map((checked: any, currentIndex: any) =>
          currentIndex === index
            ? { ...checked, checked: !checked.checked }
            : checked
        ),
  
      );
    };
    const filterData = checked.filter((data: any) => {
      return data.checked === true;
    });
    
    useEffect(() => {
      signUpState.setState({
        ...signUpState.state,
        userApprovel: (signUpState.state.userApprovel = filterData),
      });
    }, [checked]);
  return (
    <div className="flex gap-3 p-6  flex-col">
      <h2 className="text-sm font-medium text-[#000000d9]">
        User Approvels
      </h2>
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
export default UserApprovel;
