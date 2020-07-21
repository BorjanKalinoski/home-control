import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../components/atoms/CustomIcon";
import DisplayContainer from "../components/organisms/DisplayContainer";
import CustomText from "../components/atoms/CustomText";
import SettingsContainer from "../components/organisms/SettingsContainer";
import ChangeTemperature from "../components/molecules/ChangeTemperature";
const AcRemoteScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <CustomText text="Living Room" textSize={30} />
      <DisplayContainer />
      <View style={styles.header}>
        <CustomIcon name="power" iconSize={48} />
        <CustomIcon name="information-outline" iconSize={48} />
      </View>
      <SettingsContainer />
      <ChangeTemperature />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    textAlign: "center",
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
    alignSelf: "center",
  },
});

export default AcRemoteScreen;
