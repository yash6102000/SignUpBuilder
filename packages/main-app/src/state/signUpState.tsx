import React from "react";

export const StoreContext = React.createContext(null);

export default ({ children }: { children: any }) => {
  const [state, setState] = React.useState({
    viewPort: {
      desktop: false,
      "tablet:": false,
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
      },
    },
    colors:{
      primary: "#2F54EB",
      secondary: "#FFFFFF",
      error: "#DC6264",
    }
  });

  const store = {
    signUpState: { state, setState },
  } as any;

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
