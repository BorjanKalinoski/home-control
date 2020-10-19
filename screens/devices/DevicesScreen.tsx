import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";

const devices = [
    {
        name: 'Klima',
        type: 'AC'
    },
    {
        name: 'UL. NIKOLA VUKMIROVIKJ BR 25A',
        type: 'MAILBOX'
    },
];


const DevicesScreen = (props: any) => {
    const renderListItem = (itemData) => {
        return <View style={styles.device}><Text>{itemData.item.name}</Text></View>;
    };
    return <FlatList
        data={devices}
        keyExtractor={item => item.name}
        renderItem={renderListItem}
    />;
};

const styles = StyleSheet.create({
    device: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        marginVertical: 10
    }
});


export default DevicesScreen;
