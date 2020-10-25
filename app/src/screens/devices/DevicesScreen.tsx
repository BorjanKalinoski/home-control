import React, {useEffect} from "react";
import {FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {devicesActions} from '../../store/actions';
import {MailboxListItem, AirConditionerListItem, Loading} from "../../components";
import {globalStyles} from "../../styles";

const DevicesScreen = (props: any) => {
    // @ts-ignore
    const {devices, isLoading} = useSelector(state => state.devices);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(devicesActions.fetchDevices());
    }, []);


    const renderListItem = (itemData:any) => {
        const {key, name, uid,type} = itemData.item;
        if (type === 'MAILBOX') {
            return <MailboxListItem referencePath={key} title={name} uid={uid}/>;
        } else {
            return <AirConditionerListItem navigation={props.navigation} referencePath={key} title={name} uid={uid}/>;
        }
    };

    if (isLoading) {
        return <Loading style={globalStyles.noStretch}/>;
    }

    return <FlatList
        data={devices}
        keyExtractor={item => item.name}
        renderItem={renderListItem}
        refreshing={isLoading}
        onRefresh={() => dispatch(devicesActions.fetchDevices())}
    />;
};

export default DevicesScreen;
