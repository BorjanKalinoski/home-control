import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
import CustomText from "../../atoms/CustomText";
const ChangeTemperature = (props: any) => {
  return (
    <View style={styles.row}>
      <View style={styles.row}>
        <CustomIcon name="plus-box" iconSize={65} />
        <CustomIcon name="minus-box" iconSize={65} />
      </View>
      <View style={styles.column}>
        <CustomText textSize={80} text="25 &#x2103;" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  column: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChangeTemperature;
