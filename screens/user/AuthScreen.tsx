import React, {useCallback, useState} from "react";
import {Button, TextInput} from "react-native-paper";
import {View,StyleSheet} from "react-native";
import * as firebase from 'firebase';
import {useDispatch} from "react-redux";
import * as authActions from '../../store/actions/auth';
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

const AuthScreen = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const onAuthHandler = useCallback(() => {
        dispatch(authActions.tryAuthenticateWithEmailAndPassword(email, password));
    }, [dispatch, email, password]);


    return <View style={styles.screen}>
        <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            mode='outlined'
        />
        <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            mode='outlined'
        />

        <Button mode='contained' onPress={onAuthHandler}>
            Sign Up
        </Button>
    </View>;
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 8
    }
});

export default AuthScreen;
