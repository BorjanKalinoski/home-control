import React, {useEffect} from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text, List, Divider,} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import * as devicesActions from '../../store/actions/devices';

const DevicesScreen = (props: any) => {
    const devices = useSelector(state => state.devices.devices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(devicesActions.fetchDevices());
    }, [dispatch]);


    const renderListItem = (itemData) => {
        let item = <List.Item
            style={styles.device}
            title={itemData.item.name}
            description={itemData.item.type === 'AC' ? '' : 'You have a new mail'}
            left={props => <List.Icon icon={itemData.item.type === 'AC' ? 'air-conditioner' : 'email'}/>}
        />;
        if (itemData.item.type === 'AC') {
            item = <TouchableOpacity onPress={() => props.navigation.navigate('AcRemoteScreen')}>
                {item}
            </TouchableOpacity>;
        }
        return <View>{item}<Divider/></View>;

    };

    return <FlatList
        data={devices}
        keyExtractor={item => item.name}
        renderItem={renderListItem}
    />;
};

const styles = StyleSheet.create({
    device: {
        padding: 10,
    }
});


export default DevicesScreen;
