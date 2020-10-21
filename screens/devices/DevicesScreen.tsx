import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {List, Divider, ActivityIndicator,} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import * as devicesActions from '../../store/actions/devices';
import MailboxListItem from "../../components/UI/MailboxListItem";
import AcListItem from "../../components/UI/AcListItem";

const DevicesScreen = (props: any) => {
    const {navigation} = props;
    const {devices, isLoading} = useSelector(state => state.devices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(devicesActions.fetchDevices());

        // const unsubscribe = navigation.addListener('focus', () => {
        //     console.log('dvapati')
        //     dispatch(devicesActions.fetchDevices());
        // });
        // return () => {
        //     console.log('unsubbing!');
        //     console.log(unsubscribe);
        //     unsubscribe();
        // };

    }, [dispatch]);


    const renderListItem = (itemData) => {
        const {key, name, uid,type} = itemData.item;
        if (type === 'MAILBOX') {
            return <MailboxListItem path={key} name={name} uid={uid}/>;
        } else {
            return <AcListItem path={key} name={name} uid={uid}/>;
        }
    };
    if (isLoading) {
        return <View style={{alignItems:'center',
            justifyContent: 'center'}}>
            <ActivityIndicator size='large'/>
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
    device: {
        padding: 10,
    }
});


export default DevicesScreen;
