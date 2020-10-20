import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const ErrorMessage = (props: any) => {

    return <View style={styles.error}>
        <Icon style={styles.icon} name='error' size={30} color={'#f44336'}/>
        <Text style={styles.text}>{props.children}</Text>
    </View>

};

const styles = StyleSheet.create({
    error: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fdecea',
        marginBottom: 6,
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1,
        flexWrap: 'wrap'
    }
});

export default ErrorMessage;
