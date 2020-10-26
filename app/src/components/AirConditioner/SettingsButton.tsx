import React from "react";
import {Button} from "react-native-paper";
import {StyleSheet, TouchableOpacity} from "react-native";

const SettingsButton = (props: any) => {
    const {text, style} = props;

    return <Button
        mode='contained'
        compact
        uppercase
        color={'#ccc'}
        style={{...styles.button, ...style}}
        labelStyle={styles.text}
        onPress={props.onPress}
    >
        {text}
    </Button>;
};

const styles = StyleSheet.create({
    container: {
        width: '50%'
    },
    button: {
        borderRadius: 0,
        width: '50%',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default SettingsButton;
