import React from "react";
import SelectComponent from "../../../common-functions/SelectComponent";
import { fontFamily, fontSizes, linkStyle } from "../../../../styleConfigs";
import { StoreContext } from "../../../../state/signUpState";
import { Input } from "antd";
import '../../../signUpBuilder/builder.css'
const Typography = () => {
  const { Search } = Input;
  const { signUpState }: any = React.useContext(StoreContext);
  const handleNormalTextFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        normalText: {
          ...signUpState.state.typography.normalText,
          fontSize: (signUpState.state.typography.normalText.fontSize = value),
        },
      },
    });
  };
  const handleTitleFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        title: {
          ...signUpState.state.typography.title,
          fontSize: (signUpState.state.typography.title.fontSize = value),
        },
      },
    });
  };
  const handleSubTitleFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        subTitle: {
          ...signUpState.state.typography.subTitle,
          fontSize: (signUpState.state.typography.subTitle.fontSize = value),
        },
      },
    });
  };
  const handleLinksFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        links: {
          ...signUpState.state.typography.links,
          fontSize: (signUpState.state.typography.links.fontSize = value),
        },
      },
    });
  };
  const handleStyleFontSize = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        links: {
          ...signUpState.state.typography.links,
          linkTypes: (signUpState.state.typography.links.linkTypes = value),
        },
      },
    });
  };
  const handleNormalBoldStyle = () => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        normalText: {
          ...signUpState.state.typography.normalText,
          bold: (signUpState.state.typography.normalText.bold= !signUpState.state.typography.normalText.bold),
        },
      },
    });
  };
  const handleTitleBoldStyle = () => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        title: {
          ...signUpState.state.typography.title,
          bold: (signUpState.state.typography.title.bold =!signUpState.state.typography.title.bold),
        },
      },
    });
  };
  const handleSubTitleBoldStyle = () => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        subTitle: {
          ...signUpState.state.typography.subTitle,
          bold: (signUpState.state.typography.subTitle.bold =!signUpState.state.typography.subTitle.bold),
        },
      },
    });
  };
  const handleLinksBoldFont = () => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        links: {
          ...signUpState.state.typography.links,
          bold: (signUpState.state.typography.links.bold = !signUpState.state.typography.links.bold),
        },
      },
    });
  };

  const handleFontFamily = (value: string) => {
    signUpState.setState({
      ...signUpState.state,
      typography: {
        ...signUpState.state.typography,
        fontType: (signUpState.state.typography.fontType = value),
      },
    });
  };
  const onSearch = (value: string) =>  signUpState.setState({
    ...signUpState.state,
    typography: {
      ...signUpState.state.typography,
      fontSearchUrl: (signUpState.state.typography.fontSearchUrl = value),
    },
  });;
  console.log(signUpState.state.typography.fontSearchUrl)
  
  return (
    <div className="p-5 pt-0 flex flex-col gap-3">
      <template>
 {signUpState.state.typography.fontSearchUrl}
</template>
      <span className="text-xs text-[#000000d9] font-medium">
        Reference text Sizes
      </span>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[#000000d9]">Font URL</span>
      <Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{ width: 304 }}
    />
      </div>
    
      <div className="flex flex-col gap-3">
        <div className="flex flex-col border-dashed border-b border-[#0000000f] gap-2 y-4">
          <span className="text-xs text-[#000000d9] font-medium">
            Select Font
          </span>
          <SelectComponent
            defaultValue={signUpState.state.typography.fontType}
            onChange={handleFontFamily}
            options={fontFamily}
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectComponent
            label={"Normal Text"}
            defaultValue={signUpState.state.typography.normalText.fontSize}
            onChange={handleNormalTextFontSize}
            options={fontSizes}
            bold={handleNormalBoldStyle}
          />
          <SelectComponent
            label={"Title"}
            defaultValue={signUpState.state.typography.title.fontSize}
            onChange={handleTitleFontSize}
            options={fontSizes}
            bold={handleTitleBoldStyle}
          />
          <SelectComponent
            label={"Subtitle"}
            defaultValue={signUpState.state.typography.subTitle.fontSize}
            onChange={handleSubTitleFontSize}
            options={fontSizes}
            bold={handleSubTitleBoldStyle}
          />
          <hr className="h-px w-full bg-[#0000000f]" />
          <SelectComponent
            label={"Links"}
            defaultValue={signUpState.state.typography.links.fontSize}
            onChange={handleLinksFontSize}
            options={fontSizes}
            bold={handleLinksBoldFont}
          />
          <SelectComponent
            label={"Links"}
            defaultValue={signUpState.state.typography.links.linkTypes}
            onChange={handleStyleFontSize}
            options={linkStyle}
          />
        </div>
      </div>
    </div>
  );
};
export default Typography;
