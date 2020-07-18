import React from "react";
import { View } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
import CustomText from "../../atoms/CustomText";

const InfoContainer = (props: any) => {
  return (
    <View>
      <CustomIcon name="information-outline" />
      <CustomText text="daa" />
    </View>
  );
};

export default InfoContainer;
