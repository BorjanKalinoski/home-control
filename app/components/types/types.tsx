import CustomText from "../atoms/CustomText";

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
export { CustomIconProps, CustomTextProps, ModeIconProps };
