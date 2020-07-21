import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
//dodadi classname na sekoj customIcon za da prikazes 1/3 , 2/3 ili 3/3 fans stilovi itn itn
const DEFAULT_FAN_ICON_SIZE = 32;
//vo props se prakja low, med, high, auto
const Fan = (props: any) => {
  return (
    <View style={styles.container}>
      <CustomIcon name={"fan"} iconSize={DEFAULT_FAN_ICON_SIZE} />
      <CustomIcon name={"fan"} iconSize={DEFAULT_FAN_ICON_SIZE} />
      <CustomIcon name={"fan"} iconSize={DEFAULT_FAN_ICON_SIZE} />
      <CustomIcon name={"autorenew"} iconSize={DEFAULT_FAN_ICON_SIZE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

export default Fan;
