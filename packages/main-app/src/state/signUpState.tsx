import React from "react";

export const StoreContext = React.createContext(null);

export default ({ children }: { children: any }) => {
  const [state, setState] = React.useState({
    viewPort: {
      desktop: true,
      tablet: false,
      mobile: false,
      fullScreen: false,
    },
    theme: {
      color: "light",
    },
    buttons: {
      socialButtons: {
        position: {
          bottom: true,
          top: false,
        },
        layout: {
          layoutType: "Equally-Split",
        },
        fontSize: "sm",
        fontWeight: "500",
        fontColor: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        buttonState:'Default State'
      },
      submitButton: {
        position: {
          bottom: true,
          top: false,
        },
        layout: {
          layoutType: "Equally-Split",
        },
        fontSize: "sm",
        fontWeight: "500",
        fontColor: "#FFFFFF",
        backgroundColor: "#070930",
        borderRadius: 0,
        buttonState:'Default State'
      },
    },
    colors:{
      primary: "#2F54EB",
      error: "#DC6264",
    },
    signUpBox:{
      backgroundColor: "#FFFFFF",
      boxBorder: 0,
      boxShadow:''
    },
    logoImage:null,
    inputField:{
      fieldState: "",
      fontSize: "sm",
      fontWeight: "500",
      fontColor: "#000000",
      backgroundColor: "#FFFFFF" ,
      borderRadius: 0,
      boxBorder: 2,
      labelFontSize: "sm",
      labelFontWeight: "400",
      labelFontColor: "#00000099",
    }
  });

  const store = {
    signUpState: { state, setState },
  } as any;

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
