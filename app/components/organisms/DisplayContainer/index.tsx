import React from "react";
import { View, StyleSheet } from "react-native";
import Fan from "../../molecules/Fan";
import CustomIcon from "../../atoms/CustomIcon";
import CustomText from "../../atoms/CustomText";
import ModeIcon from "../../molecules/ModeIcon";
console.log("daa\n\n\n");
const DisplayContainer = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ModeIcon name="autorenew" text="Auto" />
        <ModeIcon name="water" text="Dry" />
        <ModeIcon name="snowflake" text="Cool" />
        <ModeIcon name="fan" text="Fan" />
        <ModeIcon name="weather-sunny" text="Heat" />
      </View>
      <View style={styles.row}>
        <Fan />
        <CustomIcon name="network-strength-4" />
        <CustomText text="22 &#x2103;" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "grey",
    width: "80%",
    borderWidth: 3,
    borderColor: "grey",
  },
});

export default DisplayContainer;
