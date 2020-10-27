import React from "react";
import {StyleSheet, View} from "react-native";
import {SettingsButton, Display} from "../../components";
import {globalStyles} from "../../styles";
import {useSubmitAirConditionerState, useAirConditionerState, useAcOnChangeHandlers} from "../../hooks";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const AirConditionerRemoteScreen = (props: any) => {

    const {title, referencePath} = props.route.params;
    const [acState, mergeAndDispatchState] = useAirConditionerState();
    console.log('ac state', acState);
    useSubmitAirConditionerState(referencePath, acState);

    const {temp} = acState;

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
