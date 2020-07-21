import React from "react";
import { View, StyleSheet } from "react-native";
import ChangeTemperature from "../../molecules/ChangeTemperature";
import SettingsButtons from "../../molecules/SettingsButtons";
const SettingsContainer = (props: any) => {
  return (
    <View style={styles.row}>
      <SettingsButtons />
      <ChangeTemperature />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    width: "80%",
    justifyContent: "space-around",
  },
});
export default SettingsContainer;
