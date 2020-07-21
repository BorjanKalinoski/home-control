import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ChangeTemperature from "../../molecules/ChangeTemperature";
import CustomButton from "../../atoms/CustomButton";
const SettingsContainer = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CustomButton style={styles.button} title={"Mode"} />
        <CustomButton style={styles.button} title={"Fan"} />
        <CustomButton style={styles.button} title={"Swing"} />
      </View>
      <View style={styles.row}>
        <CustomButton style={styles.button} title={"Turbo"} />
        <CustomButton style={styles.button} title={"Health"} />
        <CustomButton style={styles.button} title={"Display"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "33.333%",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
  },
});
export default SettingsContainer;
