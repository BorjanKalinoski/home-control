import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const DEFAULT_ICON_SIZE = 24;
const CustomIcon = (props: any) => {
  return (
    <Icon
      style={styles.center}
      color={props.color}
      name={props.name}
      size={props.fontSize ? props.fontSize : DEFAULT_ICON_SIZE}
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
