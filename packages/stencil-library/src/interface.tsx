export interface SignpState {
  viewPort: ViewPort;
  theme: Theme;
  buttons: Buttons;
  colors: Colors;
  logoImage: any;
  logoAlignment: string;
  inputField: InputField;
  socialLoginButton: SociallLoginButtons[];
  emailPassLogin: string;
  userApprovel: [];
  typography: Typography;
}
export interface ViewPort {
  mobile: string;
  tablet: string;
  desktop: string;
  fullScreen: string;
}
export interface Theme {
  color: string;
}
export interface Buttons {
  socialButtons: SocialButtons;
  submitButton: SubmitButton;
}
export interface SocialButtons {
  layout: Layout;
  position: Position;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  backgroundColor: string;
  borderRadius: number;
  buttonState: string;
}
export interface Position {
  bottom: boolean;
  top: boolean;
}
export interface Layout {
  layoutType: string;
}
export interface SubmitButton {
  position: Position;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  backgroundColor: string;
  borderRadius: number;
  buttonState: string;
}
export interface Colors {
  primary: string;
  error: string;
}
export interface InputField {
  fieldState: string;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  backgroundColor: string;
  borderRadius: number;
  boxBorder: number;
  labelFontSize: string;
  labelFontWeight: string;
  labelFontColor: string;
}
export interface SociallLoginButtons {
  label: string;
  value: string;
  logo: string;
  checked: boolean;
}
export interface Typography {
  fontType: string;
  normalText: NormalText;
  title: Title;
  subTitle: SubTitle;
  links: Links;
}
export interface NormalText {
  fontSize: string;
  bold: boolean;
}
export interface Title {
  fontSize: string;
  bold: boolean;
}
export interface SubTitle {
  fontSize: string;
  bold: boolean;
}

export interface Links {
  fontSize: string;
  linkTypes: string;
  bold:boolean
}
