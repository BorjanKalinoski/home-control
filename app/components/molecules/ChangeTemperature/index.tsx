import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
import CustomText from "../../atoms/CustomText";
const ChangeTemperature = (props: any) => {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <CustomIcon name="plus-box" />
        <CustomIcon name="minus-box" />
      </View>
      <View style={styles.column}>
        <CustomText size={16} text="25 &#x2103;" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  column: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChangeTemperature;
