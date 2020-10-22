import React, {useCallback} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Divider, List, Text} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const AcListItem = (props: any) => {
    const {name, type, path,} = props;
    const navigation = useNavigation();
    const onPressHandler = useCallback(() => {
        navigation.navigate('AcRemoteScreen', {
            name,
            path
        });
    }, [navigation]);
    return <TouchableOpacity onPress={onPressHandler}>
        <View>
            <List.Item
                // style={styles.device}
                title={name}
                left={props => <List.Icon color='blue' icon='air-conditioner'/>}
            />
            <Divider/>
        </View>
    </TouchableOpacity>;
};

const styles = StyleSheet.create({

});
export default AcListItem;
