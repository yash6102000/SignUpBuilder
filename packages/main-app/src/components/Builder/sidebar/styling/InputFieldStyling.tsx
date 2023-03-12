import { Select, SelectProps } from "antd";
import React from "react";
import { StoreContext } from "../../../../state/signUpState";
const InputFieldStyling = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  const handleChange = (value: string | string[]) => {
    signUpState.setState({
      ...signUpState.state,
      buttons: {
        ...signUpState.state.inputField,
        fieldState: (signUpState.state.inputField.fieldState = value),
      },
    });
  };
  console.log(signUpState.state.inputField.fieldState ,'signUpState.state.inputField.fieldState ')
  const fieldState: SelectProps["options"] = [
    {
      label: "Placeholder Empty",
      value: "",
    },
    {
      label: "Enter Email",
      value: "Enter your email",
    },
    
    
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-xs w-2/4  text-gray-600">Field State</span>
        <Select
        className="w-2/4"
          defaultValue=""
          onChange={handleChange}
          style={{ width: "100%" }}
          options={fieldState}
        />
      </div>
    </div>
  );
};
export default InputFieldStyling;
