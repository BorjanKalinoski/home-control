import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const ModeIcon = (props: any) => {
    const {maticon, name,  text} = props;
    const size = props.size ? props.size : 52;
    const color = 'black';

    let Icon: any = Ionicons;

    if (maticon) {
        Icon = MaterialCommunityIcons;
    }


    return <View style={{...props.style,...styles.modeContainer}}>
        <Icon size={size} color={color} name={name}/>
        {text && <Text style={styles.text}>{text} </Text>}
    </View>;
};

const styles = StyleSheet.create({
    modeContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        marginTop: 3,
        fontSize: 14,
        textAlign: 'center'
    }
});

export default ModeIcon;
