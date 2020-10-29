import React, {useCallback} from "react";
import {TouchableOpacity, View} from "react-native";
import {Divider, List} from "react-native-paper";

const AirConditionerListItem = (props: any) => {
    const {title, navigation, deviceId} = props;

    const onPressHandler = useCallback(() => {
        navigation.navigate('AirConditionerRemote', {
            title,
            deviceId
        });
    }, [navigation]);

    return <TouchableOpacity onPress={onPressHandler}>
        <View>
            <List.Item
                title={title}
                left={props => <List.Icon color='blue' icon='air-conditioner'/>}
            />
            <Divider/>
        </View>
    </TouchableOpacity>;
};

export default AirConditionerListItem;
