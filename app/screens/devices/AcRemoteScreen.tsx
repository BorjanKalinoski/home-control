import React, {useCallback, useEffect, useReducer, useRef} from "react";
import {StyleSheet, Text,  View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import ModeIcon from "../../components/UI/ModeIcon";
import SettingsButton from "../../components/UI/SettingsButton";
import * as devicesActions from '../../store/actions/devices';
import {useDispatch} from "react-redux";

enum Mode {
    HEAT, COOL, DRY, FAN, AUTO
}

enum Fan{
    LOW, MED, HI, AUTO,
}

const SET_SWING = 'SET_SWING';
const SET_FAN = 'SET_FAN';
const SET_MODE = 'SET_MODE';
const SET_TEMP = 'SET_TEMP';
const SET_POWER = 'SET_POWER';
const SET_TURBO = 'SET_TURBO';

const reducer = (state: any, action: any) => {
    const {temp, turbo, power, swing, mode, fan} = action;

    let newState;
    switch (action.type) {
        case SET_TEMP:
            newState = {
                ...state,
                temp
            };
            break;
        case SET_POWER:
            newState = {
                ...state,
                power
            };
            break;
        case SET_SWING:
            newState = {
                ...state,
                swing
            };
            break;
        case SET_TURBO:
            newState = {
                ...state,
                turbo
            };
            break;
        case SET_FAN:
            newState = {
                ...state,
                mode,
                fan
            };
            break;
        case SET_MODE:
            newState = {
                ...state,
                mode,
                fan,
                turbo
            };
            break;
        default:
            return state;
    }
    return newState;
};

const initialState = {
    mode: Mode.HEAT,
    temp: 23,
    fan: Fan.LOW,
    swing: false,
    turbo: false,
    power: false
};

const AcRemoteScreen = (props: any) => {
    const [acState, dispatchAcState] = useReducer(reducer, initialState);
    const firstRender = useRef(true);
    const {name, path} = props.route.params;
    const {mode, fan, power, turbo, swing, temp} = acState;
    const dispatch = useDispatch();
    console.log('ac state is', acState);
    const fanIconSize = 32;
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            dispatch(devicesActions.submitAcState('-MK3zOf-KoaDLGkBwYEr', acState));
        }
    }, [dispatch, acState, devicesActions.submitAcState, firstRender]);


    const onModeChangeHandler = useCallback(() => {
        let {mode, turbo, fan} = acState;
        if (mode === Mode.AUTO) { //TODO change da proveruva deka e posledniot element od enumeracijata
            mode = Mode.HEAT;
        } else {
            mode++;
        }
        if (mode === Mode.DRY) {
            fan = Fan.AUTO;
        } else if (mode === Mode.FAN && fan == Fan.AUTO) {
            fan = Fan.MED;
        }

        dispatchAcState({
            type: SET_MODE,
            mode,
            fan,
            turbo: (mode === Mode.HEAT || mode === Mode.COOL || mode === Mode.FAN) && turbo
        });
    }, [dispatchAcState, acState, Mode, Fan]);

    const onFanChangeHandler = useCallback(() => {
        let {mode, fan} = acState;
        if (fan === Fan.AUTO) {
            fan = Fan.LOW;
        } else {
            fan++;
        }
        if (mode === Mode.DRY) {
            fan = Fan.AUTO;
        } else if (mode === Mode.FAN && fan === Fan.AUTO) {
            fan = Fan.LOW
        }

        dispatchAcState({
            type: SET_FAN,
            mode,
            fan
        });
    }, [dispatchAcState, acState, Fan, Mode]);

    const onTempChangeHandler = useCallback((temp: number) => {
        if (temp >= 16 && temp <= 31) {
            dispatchAcState({
                type: SET_TEMP,
                temp
            });
        }
    }, [dispatchAcState, acState]);


    const onPowerChangeHandler = useCallback(() => {
        dispatchAcState({
            type: SET_POWER,
            power: !acState.power
        });
    }, [dispatchAcState, acState]);

    const onSwingChangeHandler = useCallback(() => {
        dispatchAcState({
            type: SET_SWING,
            swing: !acState.swing
        });
    }, [dispatchAcState, acState]);

    const onTurboChangeHandler = useCallback(() => {
        if (mode === Mode.HEAT || mode === Mode.COOL || mode === Mode.FAN) {
            dispatchAcState({
                type: SET_TURBO,
                turbo: !acState.turbo
            });
        }
    }, [dispatchAcState, acState, Mode]);

    return <View style={styles.screen}>
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
    screen: {
        flex: 1,
        padding: 12,
    },
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

export default AcRemoteScreen;
