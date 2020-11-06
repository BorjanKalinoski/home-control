import React, {useEffect} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {devicesActions} from '../../redux/actions';
import {MailboxListItem, AirConditionerListItem, Loading} from "../../components";
import {globalStyles} from "../../styles";
import {Text} from 'react-native-elements';
import Devices from "../../constants/Devices";
import {StackNavigationProp} from "@react-navigation/stack";

const DevicesScreen = ({navigation}: DevicesScreenProps) => {


    // @ts-ignore
    const {devices, isLoading} = useSelector(state => state.devices);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(devicesActions.fetchDevices());
    }, []);

    const renderListItem = (itemData: any) => {
        const {key, name, uid, type} = itemData.item;
        if (type === Devices.MAILBOX) {
            return <MailboxListItem deviceId={key} name={name} uid={uid}/>;
        } else {
            return <AirConditionerListItem navigation={navigation} deviceId={key} title={name} uid={uid}/>;
        }
    };

    if (isLoading) {
        return <Loading style={globalStyles.noStretch}/>;
    }

    if (!devices.length) {
        return <View style={styles.noDevicesScreen}>
            <Text style={styles.noDevicesText}>There are no connected devices</Text>
        </View>;
    }

    return <FlatList
        data={devices}
        keyExtractor={item => item.name}
        renderItem={renderListItem}
        refreshing={isLoading}
        onRefresh={() => dispatch(devicesActions.fetchDevices())}
    />;
};

const styles = StyleSheet.create({
    noDevicesScreen: {
        ...globalStyles.center,
        paddingVertical: 40
    },
    noDevicesText: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

type DevicesScreenProps={
    navigation: StackNavigationProp<any>;
}

export default DevicesScreen;
