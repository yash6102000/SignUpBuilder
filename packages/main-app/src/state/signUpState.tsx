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
    buttons:{
      socialButtons:{
        position:{
          buttom:true
        },
        layout:{
          layoutType:'Equally-Split',
      
        }
      }
    }
  });

  const store = {
    signUpState: { state, setState },
  } as any;

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
