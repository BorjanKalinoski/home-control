import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomIconProps from "../../types/types";
const DEFAULT_ICON_SIZE = 24; //izvadi gi vo config file
const CustomIcon = (props: CustomIconProps) => {
  return (
    <Icon
      color={props.color}
      name={props.name}
      size={props.iconSize ? props.iconSize : DEFAULT_ICON_SIZE}
      style={styles.center}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});
export default CustomIcon;
