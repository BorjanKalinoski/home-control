import React from "react";
import CustomButton from "../../atoms/CustomButton";
import { View, StyleSheet } from "react-native";
//mozebi so css samo ke dodademe width na custom buttons ili na rowot
const SettingsButtons = (props: any) => {
  return (
    <View>
      <View style={styles.row}>
        <CustomButton style={styles.button} title={"Mode"} />
        <CustomButton style={styles.button} title={"Fan"} />
        <CustomButton style={styles.button} title={"Fan"} />
      </View>
      <View style={styles.row}>
        <CustomButton style={styles.button} title={"Turbo"} />
        <CustomButton style={styles.button} title={"Swing"} />
        <CustomButton style={styles.button} title={"Swing"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "33.333%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default SettingsButtons;
