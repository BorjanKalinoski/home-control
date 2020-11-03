import React, {useCallback} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {Icon, ListItem, Text} from "react-native-elements";
import {blue, iconSize, styles} from "../../constants/list-item";

const AirConditionerListItem = (props: any) => {
    const {title, navigation, deviceId} = props;

    const onPressHandler = useCallback(() => {
        navigation.navigate('AirConditionerRemote', {
            title,
            deviceId
        });
    }, [navigation]);

    return <TouchableOpacity onPress={onPressHandler}>
        <ListItem bottomDivider
                  containerStyle={{
                      backgroundColor: blue
                  }}
        >
            <Icon
                type='material-community'
                name='air-conditioner'
                size={iconSize}
                color='white'
            />
            <Text style={styles.text}>
                {title}
            </Text>
        </ListItem>
    </TouchableOpacity>;
};



export default AirConditionerListItem;
