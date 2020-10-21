import React, {useEffect} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {List, Divider,} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import * as devicesActions from '../../store/actions/devices';
import MailboxListItem from "../../components/UI/MailboxListItem";
import AcListItem from "../../components/UI/AcListItem";

const DevicesScreen = (props: any) => {
    const devices = useSelector(state => state.devices.devices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(devicesActions.fetchDevices());
    }, [dispatch]);


    const renderListItem = (itemData) => {
        const {key, name, uid,type} = itemData.item;
        console.log(itemData.item);
        if (type === 'MAILBOX') {
            return <MailboxListItem path={key} name={name} uid={uid}/>;
        } else {
            return <AcListItem path={key} name={name} uid={uid}/>;
        }
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
