import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import ModeIcon from "../../components/UI/ModeIcon";
import SettingsButton from "../../components/UI/SettingsButton";

const AcRemoteScreen = (props: any) => {

    const state = {
        mode: 3,
        temp: 23,
        fan: 0,
        swing: false,
        power: false
    };

    const {name, path} = props.route.params;


    const fanIconSize = 32;

    return <View style={styles.screen}>
        <View style={styles.displayContainer}>
            <View style={{...styles.row,...styles.marginBottom}}>
                <ModeIcon name={'md-snow'} text={'Cool'}/>
                <ModeIcon name={'md-water'} text={'Dry'}/>
                <ModeIcon name={'fan'} text={'Fan'} maticon={true}/>
                <ModeIcon name={'md-sunny'} text={'Heat'}/>
                <ModeIcon name={'brightness-auto'} text={'Auto'} maticon={true}/>
            </View>
            <View style={styles.row}>
                <View style={styles.fanContainer}>
                    <ModeIcon size={fanIconSize} name={'brightness-auto'} maticon={true}/>
                    <ModeIcon size={fanIconSize} name={'fan'} maticon={true}/>
                    <ModeIcon size={fanIconSize} name={'fan'} maticon={true}/>
                    <ModeIcon size={fanIconSize} name={'fan'} maticon={true}/>
                </View>
                <ModeIcon style={styles.turbo} size={40} name={'dumbbell'} text={'Turbo'} maticon={true}/>
                <View style={styles.tempContainer}>
                    <Text style={styles.tempText}>
                        22 &#x2103;
                    </Text>
                </View>
            </View>
        </View>
        <View style={{...styles.row, ...styles.powerRowContainer}}>
            <Ionicons size={40} name={'md-power'}/>
            <View style={{...styles.row, ...styles.tempButtonsContainer}}>
                <Ionicons style={styles.tempButton} name={'ios-arrow-up'} size={40}/>
                <Ionicons style={styles.tempButton} name={'ios-arrow-down'} size={40}/>
            </View>
        </View>
        <View style={styles.settingsContainer}>
            <View style={styles.row}>
                <SettingsButton>MODE</SettingsButton>
                <SettingsButton>FAN</SettingsButton>
            </View>
            <View style={styles.row}>
                <SettingsButton>TURBO</SettingsButton>
                <SettingsButton>SWING</SettingsButton>
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

export default AcRemoteScreen;
