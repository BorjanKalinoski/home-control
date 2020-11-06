import React from "react";
import {StyleSheet, View,Text} from "react-native";
import Colors from "../../constants/Colors";
import {SettingsButton, Display} from "../../components";
import {globalStyles} from "../../styles";
import {
    useSubmitAirConditionerState,
    useAcOnChangeHandlers,
    useAirConditionerStates,
} from "../../hooks";
import {areAcStatesSynced} from "../../utils";
import {Button, Icon, Tooltip} from "react-native-elements";
import RoomSensor from "../../components/AirConditioner/DisplayTempAndHumidity";
import DisplayTempAndHumidity from "../../components/AirConditioner/DisplayTempAndHumidity";

const AirConditionerRemoteScreen = (props) => {

    const {deviceId} = props.route.params;

    const [{state, dispatch}, inoState] = useAirConditionerStates(deviceId);

    useSubmitAirConditionerState(deviceId, state);

    const {
        onModeChangeHandler,
        onFanChangeHandler,
        onTempChangeHandler,
        onBooleanChangeHandler
    } = useAcOnChangeHandlers(state, dispatch);

    const areStatesSynced = areAcStatesSynced(inoState.date, state.date);
    const settingsButtonBorderRadius = 10;

    return <View style={globalStyles.container}>
        <Display
            state={state}
        />
        <View style={styles.powerAndTempButtonsRow}>
            <Button
                icon={<Icon color={'white'}
                            name='power' type='material-community' size={35}/>}
                onPress={() => onBooleanChangeHandler('power')}
                containerStyle={{borderWidth: 1, elevation: 3}}
                buttonStyle={{backgroundColor: Colors.red, borderRadius: 50, padding: 5}}
            />
            <View style={{...globalStyles.row, ...styles.tempContainer}}>
                <Button
                    buttonStyle={{
                        ...styles.tempButton,
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        backgroundColor: Colors.blue
                    }}
                    containerStyle={{
                        ...styles.tempButtonContainer, borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                    }}
                    icon={<Icon type='ionicon' color='#fff' name='ios-arrow-down' size={50}/>}
                    onPress={() => onTempChangeHandler(state.temp - 1)}
                />
                <Button
                    buttonStyle={{
                        ...styles.tempButton,
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        backgroundColor: Colors.blue

                    }}
                    containerStyle={{
                        ...styles.tempButtonContainer,
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                    }}
                    icon={<Icon type='ionicon' color='#fff' name='ios-arrow-up' size={50}/>}
                    onPress={() => onTempChangeHandler(state.temp + 1)}
                />
            </View>
        </View>
        <View style={{...styles.settingsContainer}}>
            <View style={styles.settingsButtonRow}>
                <SettingsButton
                    text='MODE'
                    style={{borderTopLeftRadius: settingsButtonBorderRadius, borderRightWidth: 0.5}}
                    onPress={onModeChangeHandler}
                />
                <SettingsButton
                    text='FAN'
                    style={{borderTopRightRadius: settingsButtonBorderRadius, borderLeftWidth: 0.5}}
                    onPress={onFanChangeHandler}
                />
            </View>
            <View style={styles.settingsButtonRow}>
                <SettingsButton
                    text='SWING'
                    style={{borderBottomLeftRadius: settingsButtonBorderRadius, borderRightWidth: 0.5}}
                    onPress={() => onBooleanChangeHandler('swing')}
                />
                <SettingsButton
                    text='TURBO'
                    style={{borderBottomRightRadius: settingsButtonBorderRadius, borderLeftWidth: 0.5}}
                    onPress={() => onBooleanChangeHandler('turbo')}
                />
            </View>
        </View>
        <DisplayTempAndHumidity deviceId={deviceId}/>
        <View style={styles.infoContainer}>
            <Tooltip popover={<Text>{areStatesSynced ? 'Devices are synced!' : 'Devices are not synced!'}</Text>}>
                <Icon
                    name='md-information-circle-outline'
                    type='ionicon'
                    size={70}
                    color={areStatesSynced ? Colors.green : Colors.yellow}
                />
            </Tooltip>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    powerAndTempButtonsRow: {
        ...globalStyles.row,
        marginVertical: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    tempContainer: {
        width: '40%',
    },
    tempButton: {
        borderRadius: 0,
        flex: 1,
        borderWidth: 1,
        borderColor:Colors.black,
        borderRightWidth: 0.5,
        padding: 5,
    },
    tempButtonContainer: {
        borderRadius: 0,
        flex: 1,
    },
    settingsContainer: {
        width: '100%',
    },
    settingsButtonRow: {
        ...globalStyles.row,
        width: '100%'
    },
    infoContainer: {
        width: '100%',
        ...globalStyles.row,
        ...globalStyles.center,
        paddingVertical: 25
    },
});

export default AirConditionerRemoteScreen;
