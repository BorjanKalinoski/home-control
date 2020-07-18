import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import AcRemoteScreen from "./app/screens/AcRemoteScreen";

console.log("da");
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AcRemoteScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: statusBarHeight,
  },
});
