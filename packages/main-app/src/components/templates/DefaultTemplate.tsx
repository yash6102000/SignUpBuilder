import React from "react";
import { FormComponent } from "react-library";
import { StoreContext } from "../../state/signUpState";
const DefaultTemplate = () => {
  const { signUpState }: any = React.useContext(StoreContext);

  return <FormComponent className="self-center" data={signUpState.state} />;
};
export default DefaultTemplate;
