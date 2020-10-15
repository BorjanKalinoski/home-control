import { StatusBar } from 'expo-status-bar';``
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

import * as firebase from 'firebase';
import AuthScreen from "./screens/user/AuthScreen";

const firebaseConfig = {
    apiKey: "AIzaSyCUA9YLmTeGmTkQag4ixpceNYADyLlvrT8",
    authDomain: "home-control-fe934.firebaseapp.com",
    databaseURL: "https://home-control-fe934.firebaseio.com",
    projectId: "home-control-fe934",
    storageBucket: "home-control-fe934.appspot.com",
    messagingSenderId: "882537633036",
    appId: "1:882537633036:web:07a9fcd8d5ef887d6ae529",
    measurementId: "G-XS9N0GB1BL"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    return (<PaperProvider theme={DefaultTheme}>
        <AuthScreen/>
    </PaperProvider>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
