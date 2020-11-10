import React, {useEffect} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Text} from 'react-native-elements';
import {StackNavigationProp} from "@react-navigation/stack";
import Devices from "../../constants/Devices";
import {MailboxListItem, AirConditionerListItem, Loading} from "../../components";
import {devicesActions} from '../../redux/actions';
import {globalStyles} from "../../styles";
import Colors from "../../constants/Colors";

const DevicesScreen = ({navigation}: DevicesScreenProps) => {

    const {devices, isLoading} = useSelector(state => state.devices);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(devicesActions.fetchDevices());
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
        return <Loading />;
    }

    if (!devices.length) {
        return <View style={styles.container}>
            <Text style={styles.text}>There are no connected devices</Text>
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
    container: {
        ...globalStyles.center,
        paddingVertical: 40
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.black
    }
});

type DevicesScreenProps = {
    navigation: StackNavigationProp<any>;
};

export default DevicesScreen;
