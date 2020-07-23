import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
import CustomText from "../../atoms/CustomText";
import { ModeIconProps } from "../../../types/types";
const DEFAULT_ICON_SIZE = 42;
const DEFAULT_TEXT_ICON_SIZE = 15; //ovie treba da bidat vo config file etc
const ModeIcon = (props: ModeIconProps) => {
  return (
    <View style={styles.container}>
      <CustomIcon
        name={props.name}
        iconSize={props.iconSize ? props.iconSize : DEFAULT_ICON_SIZE}
      />
      <CustomText
        text={props.text}
        textSize={props.textSize ? props.textSize : DEFAULT_TEXT_ICON_SIZE}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ModeIcon;
