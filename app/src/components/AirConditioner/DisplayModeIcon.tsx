import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from 'react-native-elements';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const DisplayModeIcon = (props: any) => {
    const {isMatIcon, icon, text, isActive} = props;
    const size = props.size ? props.size : 52;

    let Icon: any = Ionicons;

    if (isMatIcon) {
        Icon = MaterialCommunityIcons;
    }
    const active = isActive ? {opacity: 1} : {};


    return <View
        style={{
            ...props.style,
            ...styles.modeContainer,
            ...active
        }}>
        <Icon
            name={icon}
            size={size}
            color={Colors.black}
        />
        {text
        && <Text style={styles.text}>
            {text}
        </Text>
        }
    </View>;
};

const styles = StyleSheet.create({
    modeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.1
    },
    text: {
        marginTop: 3,
        fontSize: 14,
        textAlign: 'center'
    }
});

export default DisplayModeIcon;
