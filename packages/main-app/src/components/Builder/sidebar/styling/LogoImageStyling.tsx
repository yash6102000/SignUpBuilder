import React, { useState } from "react";
import { Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { StoreContext } from "../../../../state/signUpState";
import '../sidebar.css'
const LogoImageStyling = () => {
  const { signUpState }: any = React.useContext(StoreContext);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
    file,
  }) => {
    setFileList(newFileList);
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    signUpState.setState({
      ...signUpState.state,
      logoImage: (signUpState.state.logoImage = image.src),
    });
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div className="flex items-center px-5  w-full">
    <span className="text-xs w-2/4  text-[#00000073]">Upload Logo</span>
    <Upload
    className="w-2/4"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
       
      {fileList.length < 1 && "+ Upload"}
    </Upload>
</div>
    
  );
};
export default LogoImageStyling;
