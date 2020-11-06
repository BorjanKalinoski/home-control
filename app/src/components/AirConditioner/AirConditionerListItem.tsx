import React, {useCallback} from "react";
import {TouchableOpacity} from "react-native";
import {Icon, ListItem, Text} from "react-native-elements";
import { iconSize, listStyles} from "../../constants/list-item";
import Colors from "../../constants/Colors";
import {StackNavigationProp} from "@react-navigation/stack";

const AirConditionerListItem = ({title, navigation, deviceId}: AirConditionerListItemProps) => {

    const onPressHandler = useCallback(() => {
        navigation.navigate('AirConditionerRemote', {
            title,
            deviceId
        });
    }, [navigation]);

    return <TouchableOpacity onPress={onPressHandler}>
        <ListItem bottomDivider
                  containerStyle={{
                      backgroundColor: Colors.blue
                  }}
        >
            <Icon
                type='material-community'
                name='air-conditioner'
                size={iconSize}
                color='white'
            />
            <Text style={listStyles.text}>
                {title}
            </Text>
        </ListItem>
    </TouchableOpacity>;
};

type AirConditionerListItemProps = {
    title: string;
    deviceId: string;
    navigation: StackNavigationProp<{
        AirConditionerRemote: {
            title: string;
            deviceId: string;
        }
    }>;
};


export default AirConditionerListItem;
