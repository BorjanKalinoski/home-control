import React from "react";
import {Button} from "react-native-elements";
import {StyleSheet} from "react-native";

const SettingsButton = (props: any) => {
    const {text, style} = props;

    return <Button
        type='solid'
        style={{...styles.button, ...style}}
        onPress={props.onPress}
        title={text}
    />;
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
