import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {SettingsButton, Display, DisplayModeIcon} from "../../components";
import {globalStyles} from "../../styles";
import {useSubmitAirConditionerState, useAirConditionerState, useAcOnChangeHandlers} from "../../hooks";
import {Button} from "react-native-paper";
import PowerAndTempButtons from "../../components/AirConditioner/PowerAndTempButtons";

const AirConditionerRemoteScreen = (props: any) => {

    const {title, referencePath} = props.route.params;
    const [acState, mergeAndDispatchState] = useAirConditionerState();
    useSubmitAirConditionerState(referencePath, acState);

    const {mode, power, swing, fan, turbo, temp} = acState;

    const {
        onModeChangeHandler,
        onFanChangeHandler,
        onTempChangeHandler,
        onBooleanChangeHandler
    } = useAcOnChangeHandlers(mergeAndDispatchState, acState);

    console.log('2MAGNUM3!');

    return <View style={globalStyles.container}>
        <Display temp={temp} mode={mode} fan={fan} turbo={turbo}/>
        <PowerAndTempButtons/>
        <View style={{...styles.settingsContainer}}>
            <View style={{width: '100%', ...globalStyles.row}}>
                <Button
                    mode='contained'
                    style={{
                        width: '50%',
                        borderRadius: 0,
                    }}
                >
                    MODE
                </Button>
                <Button
                    mode='contained'
                    style={{
                        borderRadius: 0,
                        width: '50%'
                    }}
                >FAN</Button>
            </View>
            <View style={{width: '100%', ...globalStyles.row}}>
                <Button
                    mode='contained'
                    style={{
                        width: '50%',
                        borderRadius: 0,
                    }}
                >
                    SWING
                </Button>
                <Button
                    mode='contained'
                    style={{
                        borderRadius: 0,
                        width: '50%'
                    }}
                >TURBO</Button>
            </View>
        </View>
    </View>;



    // return <View style={globalStyles.container}>
    //     <View style={{...styles.row, ...styles.powerRowContainer}}>
    //         <Ionicons
    //             size={40}
    //             name={'md-power'}
    //             onPress={onBooleanChangeHandler.bind(this, 'power')}
    //         />
    //         <View style={{...styles.row, ...styles.tempButtonsContainer}}>
    //             <Ionicons
    //                 onPress={onTempChangeHandler.bind(this, temp + 1)}
    //                 style={styles.tempButton}
    //                 name={'ios-arrow-up'} size={40}
    //             />
    //             <Ionicons
    //                 onPress={onTempChangeHandler.bind(this, temp + -1)}
    //                 style={styles.tempButton}
    //                 name={'ios-arrow-down'} size={40}
    //             />
    //         </View>
    //     </View>
    //     <View style={styles.settingsContainer}>
    //         <View style={styles.row}>
    //             <SettingsButton onPress={onModeChangeHandler}>MODE</SettingsButton>
    //             <SettingsButton onPress={onFanChangeHandler}>FAN</SettingsButton>
    //         </View>
    //         <View style={styles.row}>
    //             <SettingsButton onPress={onBooleanChangeHandler.bind(this, 'turbo')}>TURBO</SettingsButton>
    //             <SettingsButton onPress={onBooleanChangeHandler.bind(this, 'swing')}>SWING</SettingsButton>
    //         </View>
    //     </View>
    // </View>;
};

const styles = StyleSheet.create({
    powerAndTempButtonsContainer: {
        ...globalStyles.row,
        ...globalStyles.marginVertical,
        ...globalStyles.spaceBetween,
        ...globalStyles.paddingHorizontal
    },
    tempButtonsContainer: {
        backgroundColor: '#ccc',
        width: '35%',
        borderLeftWidth: 1,
    },
    tempButton: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
        borderLeftWidth: 0,

    },
    settingsContainer: {
        width: '100%',
        borderWidth: 2
    },


});

export default AirConditionerRemoteScreen;

