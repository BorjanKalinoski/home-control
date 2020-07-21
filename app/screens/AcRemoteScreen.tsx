// import React from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   Platform,
//   StatusBar,
//   StyleSheet,
// } from "react-native";

import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import CustomIcon from "../components/atoms/CustomIcon";
import DisplayContainer from "../components/organisms/DisplayContainer";
import SettingsContainer from "../components/organisms/SettingsContainer";
import CustomText from "../components/atoms/CustomText";

const AcRemoteScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <CustomText text="Livingroom" />
      <DisplayContainer />
      <View style={styles.header}>
        <CustomIcon name="power" />
        <CustomIcon name="information-outline" />
      </View>
      {/* <SettingsContainer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    textAlign: "center",
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
    alignSelf: "center",
  },
});

export default AcRemoteScreen;
