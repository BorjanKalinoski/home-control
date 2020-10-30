import React from "react";
import {StyleSheet, View,Text} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {SettingsButton, Display} from "../../components";
import {globalStyles} from "../../styles";
import {
    useSubmitAirConditionerState,
    useMobileAirConditionerState,
    useAcOnChangeHandlers,
    useInoAirConditionerState
} from "../../hooks";
import {areAcStatesSynced} from "../../utils";

//TODO check what is causing state missmatches!

const AirConditionerRemoteScreen = (props: any) => {

    const {deviceId} = props.route.params;

    const [state, modifyAndDispatchState] = useMobileAirConditionerState(deviceId);

    useSubmitAirConditionerState(deviceId, state);
    const inoState = useInoAirConditionerState(deviceId);

    const {
        onModeChangeHandler,
        onFanChangeHandler,
        onTempChangeHandler,
        onBooleanChangeHandler
    } = useAcOnChangeHandlers(modifyAndDispatchState, state);

    const {temp} = state;

    const areStatesSynced = areAcStatesSynced(inoState.date, state.date);


    return <View style={globalStyles.container}>
        <Display
            state={state}
        />
        <View style={styles.powerAndTempButtonsRow}>
            <MaterialCommunityIcons
                style={styles.powerButton}
                color='black'
                size={50}
                name='power'
                onPress={onBooleanChangeHandler.bind(this, 'power')}
            />
            <View style={{...globalStyles.row, ...styles.tempButtonsContainer}}>
                <Ionicons
                    size={50}
                    name='ios-arrow-down'
                    style={styles.tempButton}
                    onPress={onTempChangeHandler.bind(this, temp - 1)}
                />
                <Ionicons
                    size={50}
                    name='ios-arrow-up'
                    style={styles.tempButton}
                    onPress={onTempChangeHandler.bind(this, temp + 1)}
                />
            </View>
        </View>
        <View style={{...styles.settingsContainer}}>
            <View style={styles.settingsButtonRow}>
                <SettingsButton
                    text='mode'
                    style={{borderTopLeftRadius: 10}}
                    onPress={onModeChangeHandler}
                />
                <SettingsButton
                    text='fan'
                    style={{borderTopRightRadius: 10}}
                    onPress={onFanChangeHandler}
                />
            </View>
            <View style={styles.settingsButtonRow}>
                <SettingsButton
                    text='swing'
                    style={{borderBottomLeftRadius: 10}}
                    onPress={onBooleanChangeHandler.bind(this, 'swing')}
                />
                <SettingsButton
                    text='turbo'
                    style={{borderBottomRightRadius: 10}}
                    onPress={onBooleanChangeHandler.bind(this, 'turbo')}
                />
            </View>
        </View>
        <View style={styles.infoContainer}>
            {
                areStatesSynced
                    ? <View style={styles.info}>
                        <Ionicons
                            name='md-information-circle-outline'
                            color={'green'}
                            size={70}
                            style={styles.infoIcon}
                        />
                        <Text style={styles.infoText}>Synced with device</Text>
                    </View>
                    : <View style={styles.info}>
                        <Ionicons
                            name='md-information-circle-outline'
                            color={'yellow'}
                            size={70}
                            style={styles.infoIcon}
                        />
                        <Text style={styles.infoText}>Not synced with device</Text>
                    </View>
            }
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
    powerButton: {
        backgroundColor: '#ccc',
        borderRadius: 25,
        elevation: 3,
        borderWidth: 1,
        borderColor: 'grey'
    },
    tempButtonsContainer: {
        backgroundColor: '#ccc',
        width: '40%',
    },
    tempButton: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'grey',
    },
    settingsContainer: {
        width: '100%',
        borderRadius: 10,
        borderColor: '#ccc',
        elevation: 3
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
    info: {
        ...globalStyles.row,
        ...globalStyles.center
    },
    infoText:{
        fontSize: 18
    },
    infoIcon:{
        marginRight: 16
    }
});

export default AirConditionerRemoteScreen;
