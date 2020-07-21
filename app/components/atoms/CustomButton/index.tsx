import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const CustomButton = ({ onPress, title }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: "lightgrey",
    borderWidth: 1,
    borderColor: "grey",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    height: 80,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default CustomButton;
