import CustomText from "../atoms/CustomText";
import { TextStyle, StyleProp, ViewStyle } from "react-native";
interface CustomIconProps {
  color?: string;
  iconSize?: number;
  name: string;
}
interface CustomTextProps {
  textSize?: number;
  text: string;
}
interface ModeIconProps {
  iconSize?: number;
  name: string;
  text: string;
  textSize?: number;
}
interface CustomButtonProps {
  onPress: (any: any) => any;
  title: string;
  buttonContainerStyle?: StyleProp<ViewStyle>; //ovie mozebi treba vo drug fajl da bidat izvadeni
  buttonTextStyle?: StyleProp<TextStyle>;
}
export { CustomIconProps, CustomTextProps, ModeIconProps, CustomButtonProps };
