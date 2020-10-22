import React from "react";
import {StyleSheet} from "react-native";
import {Text} from "react-native-paper";

const SettingsButton = props => {
    return <Text onPress={props.onPress} style={styles.settingsButton}>{props.children}</Text>;
};

const styles=StyleSheet.create({
    settingsButton: {
        borderWidth: 1,
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 10,
        fontSize:20,
        fontWeight: "bold"
    }
})

export default SettingsButton;
