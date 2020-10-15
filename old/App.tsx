import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AcRemoteScreen from "./app/scenes/ACRemote/AcRemoteScreen";
import DevicesScreen from "./app/scenes/DevicesScreen/DevicesScreen";
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Device">
        <Stack.Screen name="Devices" component={DevicesScreen} />
        <Stack.Screen name="ACRemote" component={AcRemoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
