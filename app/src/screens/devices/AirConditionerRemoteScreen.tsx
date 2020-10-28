import React from "react";
import {Alert, StyleSheet, View} from "react-native";
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
import {useDispatch, useSelector} from "react-redux";
import {devicesActions} from "../../redux/actions";


const AirConditionerRemoteScreen = (props: any) => {

    const {title, referencePath} = props.route.params;
    const [acState, mergeAndDispatchState] = useMobileAirConditionerState();
    useSubmitAirConditionerState(referencePath, acState);
    const kur = useInoAirConditionerState(referencePath, acState);

    const deviceData = useSelector(state => state.devices[referencePath]);//TODO think about this how to implement

    const dispatch = useDispatch();
    if (deviceData && deviceData.error) { //TODO seperate function for Alerts like this
        Alert.alert(
            'Oops..',
            deviceData.error.message,
            [{
                text: 'Okay',
                onPress: () => dispatch(devicesActions.clearDeviceErrors(referencePath))
            }]
        );
    }


    const {temp} = acState;

    const statesAreSynced = areAcStatesSynced(kur.date, acState.date);

    const {
        onModeChangeHandler,
        onFanChangeHandler,
        onTempChangeHandler,
        onBooleanChangeHandler
    } = useAcOnChangeHandlers(mergeAndDispatchState, acState);

    return <View style={globalStyles.container}>
        <Display
            state={acState}
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
        <View>
            {
                statesAreSynced
                    ? <Ionicons name='md-information-circle-outline' color={'green'} size={60}/>
                    : <Ionicons name='md-information-circle-outline' color={'yellow'} size={60}/>
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
});

export default AirConditionerRemoteScreen;
