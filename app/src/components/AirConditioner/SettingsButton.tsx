import React from "react";
import {Button} from "react-native-elements";
import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const SettingsButton = (props: any) => {
    const {text, style} = props;

    return <Button
        type='solid'
        containerStyle={styles.buttonContainer}
        buttonStyle={{...styles.button, ...style, backgroundColor: Colors.blue}}
        onPress={props.onPress}
        title={text}
        titleStyle={styles.text}
    />;
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '50%',
        borderRadius: 0
    },
    button: {
        borderColor: Colors.black,
        borderRadius: 0,
        borderWidth: 0.5,
        padding: 14
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default SettingsButton;
