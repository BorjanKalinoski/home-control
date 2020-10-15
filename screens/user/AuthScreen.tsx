import React, {useState} from "react";
import {Button, TextInput} from "react-native-paper";
import {View,StyleSheet} from "react-native";

const AuthScreen = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

        <Button mode='contained' onPress={() => {
        }}>
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
