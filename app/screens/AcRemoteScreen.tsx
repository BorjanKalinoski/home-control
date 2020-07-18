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
import InfoContainer from "../components/organisms/InfoContainer";

const AcRemoteScreen = (props: any) => {
  return (
    <ScrollView style={styles.container}>
      <CustomIcon name={"power"} />
      <DisplayContainer />
      <SettingsContainer />
      <InfoContainer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "green",
    width: "100%",
    textAlign: "center",
  },
});

export default AcRemoteScreen;
