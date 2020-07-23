import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { CustomButtonProps } from "../../../types/types";
const CustomButton = ({
  buttonContainerStyle,
  buttonTextStyle,
  onPress,
  title,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.buttonContainerStyle, buttonContainerStyle]}
    >
      <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainerStyle: {
    elevation: 8,
    backgroundColor: "black",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    height: 80,
  },
  buttonTextStyle: {
    fontSize: 18,
    textDecorationColor: "white",
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default CustomButton;
