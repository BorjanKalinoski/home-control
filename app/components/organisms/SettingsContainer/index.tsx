import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../atoms/CustomButton";
const SettingsContainer = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CustomButton
          buttonContainerStyle={styles.buttonContainerStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={() => null}
          title={"Mode"}
        />
        <CustomButton
          buttonContainerStyle={styles.buttonContainerStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={() => null}
          title={"Fan"}
        />
        <CustomButton
          buttonContainerStyle={styles.buttonContainerStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={() => null}
          title={"Swing"}
        />
      </View>
      <View style={styles.row}>
        <CustomButton
          buttonContainerStyle={styles.buttonContainerStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={() => null}
          title={"Turbo"}
        />
        <CustomButton
          buttonContainerStyle={styles.buttonContainerStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={() => null}
          title={"Health"}
        />
        <CustomButton
          buttonContainerStyle={styles.buttonContainerStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={() => null}
          title={"Display"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "33.333%",
  },
  buttonTextStyle: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  buttonContainerStyle: {
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    marginVertical: 18,
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
  },
});
export default SettingsContainer;
