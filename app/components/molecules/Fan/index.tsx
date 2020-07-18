import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../atoms/CustomIcon";
//dodadi classname na sekoj customIcon za da prikazes 1/3 , 2/3 ili 3/3 fans stilovi itn itn
//vo props se prakja low, med, high, auto
const Fan = (props: any) => {
  return (
    <View style={styles.container}>
      <CustomIcon name={"fan"} />
      <CustomIcon name={"fan"} />
      <CustomIcon name={"fan"} />
      <CustomIcon name={"autorenew"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    //align items
    borderColor: "pink",
    borderWidth: 1,
  },
});

export default Fan;
