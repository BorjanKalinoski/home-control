import React, {useCallback} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Divider, List} from "react-native-paper";

const AcListItem = (props: any) => {
    const {navigation, name, type, path,} = props;
    const onPressHandler = useCallback(() => {
        // navigation.navigate('AcRemoteScreen'); //setparams etc
    }, [navigation]);
    return <TouchableOpacity onPress={onPressHandler}>
        <View>
            <List.Item
                // style={styles.device}
                title={name}
                left={props => <List.Icon icon='air-conditioner'/>}
            />;
            <Divider/>
        </View>
    </TouchableOpacity>;
};

const styles = StyleSheet.create({

});
export default AcListItem;
