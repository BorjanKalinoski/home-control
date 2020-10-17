import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet,} from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';
import AuthScreen from "./screens/user/AuthScreen";
import {Provider,} from "react-redux";
import {store} from "./store/configure-store";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import DevicesScreen from "./screens/devices/DevicesScreen";
import {auth} from "firebase";
import MainNavigator from "./navigation/MainNavigator";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                    <MainNavigator/>
            </PaperProvider>
        </Provider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
