import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
import CustomText from "../../atoms/CustomText";
const ChangeTemperature = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <TouchableOpacity>
          <CustomIcon color={"white"} name="plus-box" iconSize={65} />
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomIcon color={"white"} name="minus-box" iconSize={65} />
        </TouchableOpacity>
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
