import React from "react";
import { FormComponent } from "react-library";
import { StoreContext } from "../../state/signUpState";
const DefaultTemplate = () => {
  const { signUpState }: any = React.useContext(StoreContext);

  return <FormComponent className={`${(signUpState.state.viewPort.mobile||signUpState.state.viewPort.tablet)&&"self-center"}`}  data={signUpState.state} />;
};
export default DefaultTemplate;
