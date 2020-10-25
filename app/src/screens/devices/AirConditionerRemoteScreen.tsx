import React from "react";
import {StyleSheet, Text,  View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {ModeIcon, SettingsButton} from "../../components";
import {globalStyles} from "../../styles";
import {useSubmitAirConditionerState, useAirConditionerState, useAcOnChangeHandlers} from "../../hooks";
import {FanTypes, ModeTypes} from "../../constants/air-conditioner";

const AirConditionerRemoteScreen = (props: any) => {

    const {title, referencePath} = props.route.params;
    const fanIconSize = 32;

    const [acState, mergeAndDispatchState] = useAirConditionerState();
    useSubmitAirConditionerState(referencePath, acState);

    const {mode, power, swing, fan, turbo, temp} = acState;

    const {
        onModeChangeHandler,
        onFanChangeHandler,
        onTempChangeHandler,
        onBooleanChangeHandler
    } = useAcOnChangeHandlers(mergeAndDispatchState, acState);



    return <View style={globalStyles.container}>
        <View style={styles.displayContainer}>
            <View style={{...styles.row, ...styles.marginBottom}}>
                <ModeIcon active={mode === ModeTypes.HEAT} name={'md-sunny'} text={'Heat'}/>
                <ModeIcon active={mode === ModeTypes.COOL} name={'md-snow'} text={'Cool'}/>
                <ModeIcon active={mode === ModeTypes.DRY} name={'md-water'} text={'Dry'}/>
                <ModeIcon active={mode === ModeTypes.FAN} name={'fan'} text={'Fan'} maticon={true}/>
                <ModeIcon active={mode === ModeTypes.AUTO} name={'brightness-auto'} text={'Auto'} maticon={true}/>
            </View>
            <View style={styles.row}>
                <View style={styles.fanContainer}>
                    <ModeIcon active={fan === FanTypes.AUTO} size={fanIconSize} name={'brightness-auto'} maticon={true}/>
                    <ModeIcon active={fan !== FanTypes.AUTO} size={fanIconSize} name={'fan'} maticon={true}/>
                    <ModeIcon active={fan !== FanTypes.AUTO && fan >= FanTypes.MED} size={fanIconSize} name={'fan'}
                              maticon={true}/>
                    <ModeIcon active={fan !== FanTypes.AUTO && fan === FanTypes.HI} size={fanIconSize} name={'fan'}
                              maticon={true}/>
                </View>
                <ModeIcon active={turbo} style={styles.turbo} size={40} name={'dumbbell'} text={'Turbo'}
                          maticon={true}/>
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
                onPress={onBooleanChangeHandler.bind(this, 'power')}
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
                <SettingsButton onPress={onBooleanChangeHandler.bind(this, 'turbo')}>TURBO</SettingsButton>
                <SettingsButton onPress={onBooleanChangeHandler.bind(this, 'swing')}>SWING</SettingsButton>
            </View>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    marginBottom: {
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
    turbo: {},
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

