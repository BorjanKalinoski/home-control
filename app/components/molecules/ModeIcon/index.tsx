import React from "react";
import { View, Text } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
import CustomText from "../../atoms/CustomText";
const ModeIcon = (props: any) => {
  return (
    <View>
      <CustomIcon name={props.name} />
      <CustomText text={props.text} />
    </View>
  );
};

export default ModeIcon;
