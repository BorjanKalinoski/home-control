import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
import CustomText from "../../atoms/CustomText";
const ChangeTemperature = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <CustomIcon color={"white"} name="plus-box" iconSize={65} />
        <CustomIcon color={"white"} name="minus-box" iconSize={65} />
      </View>
      <CustomText textSize={70} text="25 &#x2103;" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  column: {
    padding: 8,
    backgroundColor: "grey",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChangeTemperature;
