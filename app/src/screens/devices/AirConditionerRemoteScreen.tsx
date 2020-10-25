import React, {useCallback} from "react";
import {StyleSheet, Text,  View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {ModeIcon, SettingsButton} from "../../components";
import {globalStyles} from "../../styles";
import {useSubmitAirConditionerState, useAirConditionerState} from "../../hooks";

enum Mode {
    HEAT, COOL, DRY, FAN, AUTO
}
const modeLength = Object.keys(Mode).length / 2;

enum Fan {
    LOW, MED, HI, AUTO,
}
const fanLength = Object.keys(Fan).length / 2;

const AirConditionerRemoteScreen = (props: any) => {

    const {title, referencePath} = props.route.params;
    const fanIconSize = 32;

    const [acState, mergeAndDispatchState] = useAirConditionerState();
    useSubmitAirConditionerState(referencePath, acState);

    const {mode, fan, power, turbo, swing, temp} = acState;


    const isLastModeElement = (mode: number) => {
        return (mode === modeLength - 1);
    };
    const isLastFanElement = (fan: number) => {
        return (fan === fanLength - 1);
    };
    const onModeChangeHandler = useCallback(() => {
        let {mode, turbo, fan} = acState;
        if (isLastModeElement(mode)) {
            mode = Mode.HEAT;
        } else {
            mode++;
        }
        if (mode === Mode.DRY) {
            fan = Fan.AUTO;
        } else if (mode === Mode.FAN && fan == Fan.AUTO) {
            fan = Fan.MED;
        }
        mergeAndDispatchState({
            mode,
            fan,
            turbo: (mode === Mode.HEAT || mode === Mode.COOL || mode === Mode.FAN) && turbo
        });
    }, [mergeAndDispatchState, acState]);

    const onFanChangeHandler = useCallback(() => {
        let {temp, turbo, power, swing, mode, fan} = acState;
        if (isLastFanElement(fan)) {
            fan = Fan.LOW;
        } else {
            fan++;
        }
        if (mode === Mode.DRY) {
            fan = Fan.AUTO;
        } else if (mode === Mode.FAN && fan === Fan.AUTO) {
            fan = Fan.LOW
        }
        mergeAndDispatchState({
            mode,
            fan
        });
    }, [mergeAndDispatchState, acState]);

        const onTempChangeHandler = useCallback((temp: number) => {
            if (temp >= 16 && temp <= 31) {
                mergeAndDispatchState({
                    temp
                });
            }
        }, [mergeAndDispatchState, acState]);


    const onPowerChangeHandler = useCallback(() => {
        mergeAndDispatchState({
            power: !acState.power
        });
    }, [mergeAndDispatchState, acState]);

    const onSwingChangeHandler = useCallback(() => {
        mergeAndDispatchState({
            swing: !acState.swing
        });
    }, [mergeAndDispatchState, acState]);

    const onTurboChangeHandler = useCallback(() => {
        if (mode === Mode.HEAT || mode === Mode.COOL || mode === Mode.FAN) {
            mergeAndDispatchState({
                turbo: !acState.turbo,
            });
        }
    }, [mergeAndDispatchState, acState]);


    return <View style={globalStyles.container}>
        <View style={styles.displayContainer}>
            <View style={{...styles.row, ...styles.marginBottom}}>
                <ModeIcon active={mode === Mode.HEAT} name={'md-sunny'} text={'Heat'}/>
                <ModeIcon active={mode === Mode.COOL} name={'md-snow'} text={'Cool'}/>
                <ModeIcon active={mode === Mode.DRY} name={'md-water'} text={'Dry'}/>
                <ModeIcon active={mode === Mode.FAN} name={'fan'} text={'Fan'} maticon={true}/>
                <ModeIcon active={mode === Mode.AUTO} name={'brightness-auto'} text={'Auto'} maticon={true}/>
            </View>
            <View style={styles.row}>
                <View style={styles.fanContainer}>
                    <ModeIcon active={fan === Fan.AUTO} size={fanIconSize} name={'brightness-auto'} maticon={true}/>
                    <ModeIcon active={fan !== Fan.AUTO} size={fanIconSize} name={'fan'} maticon={true}/>
                    <ModeIcon active={fan !== Fan.AUTO && fan >= Fan.MED} size={fanIconSize} name={'fan'} maticon={true}/>
                    <ModeIcon active={fan !== Fan.AUTO && fan ===Fan.HI} size={fanIconSize} name={'fan'} maticon={true}/>
                </View>
                <ModeIcon active={turbo} style={styles.turbo} size={40} name={'dumbbell'} text={'Turbo'} maticon={true}/>
                <View style={styles.tempContainer}>
                    <Text style={styles.tempText}>
                        {temp} &#x2103;
                    </Text>
                </View>
            </View>
        </View>
        <View style={{...styles.row, ...styles.powerRowContainer}}>
            <Ionicons
                size={40}
                name={'md-power'}
                onPress={onPowerChangeHandler}
            />
            <View style={{...styles.row, ...styles.tempButtonsContainer}}>
                <Ionicons
                    onPress={onTempChangeHandler.bind(this, temp + 1)}
                    style={styles.tempButton}
                    name={'ios-arrow-up'} size={40}
                />
                <Ionicons
                    onPress={onTempChangeHandler.bind(this, temp + -1)}
                    style={styles.tempButton}
                    name={'ios-arrow-down'} size={40}
                />
            </View>
        </View>
        <View style={styles.settingsContainer}>
            <View style={styles.row}>
                <SettingsButton onPress={onModeChangeHandler}>MODE</SettingsButton>
                <SettingsButton onPress={onFanChangeHandler}>FAN</SettingsButton>
            </View>
            <View style={styles.row}>
                <SettingsButton onPress={onTurboChangeHandler}>TURBO</SettingsButton>
                <SettingsButton onPress={onSwingChangeHandler}>SWING</SettingsButton>
            </View>
        </View>
    </View>;
};


const styles = StyleSheet.create({
    marginBottom:{
        marginBottom: 5
    },
    displayContainer: {
        backgroundColor: '#ccc',
        width: '100%',
        borderWidth: 1,
        borderColor: 'green',
        paddingVertical: 16,
        paddingHorizontal: 8
    },
    row: {
        flexDirection: 'row'
    },
    fanContainer: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    turbo: {
    },
    tempContainer: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempText: {
        fontSize: 38,
        fontWeight: 'bold'
    },
    tempButtonsContainer: {
        width: '35%',
        borderLeftWidth: 1,
    },
    powerRowContainer: {
        marginVertical: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    tempButton: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
        borderLeftWidth: 0,

    },
    settingsContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default AirConditionerRemoteScreen;
