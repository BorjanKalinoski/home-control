import React from "react";
import { View } from "react-native";
import CustomButton from "../../atoms/CustomButton";
import CustomIcon from "../../atoms/CustomIcon";
const SettingsContainer = (props: any) => {
  return (
    <View>
      <View>
        <View>
          <CustomButton title="Mode" />
          <CustomButton title="Fan" />
        </View>
        <View>
          <CustomButton title="Turbo" />
          <CustomButton title="Swing" />
        </View>
      </View>
      <View>
        <CustomIcon name="plus-box" />
        <CustomIcon name="minus-box" />
      </View>
    </View>
  );
};

export default SettingsContainer;
