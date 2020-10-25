import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {DisplayModeIcon} from "../index";
import {FanTypes, ModeTypes} from "../../constants/air-conditioner";
import {globalStyles} from "../../styles";

const fanIconSize = 36;

const Display = (props: any) => {
    const {mode, fan, turbo, temp, swing} = props;

    return <View style={styles.displayContainer}>
        <View style={{...globalStyles.row, ...styles.marginBottom}}>
            <DisplayModeIcon
                icon='md-sunny'
                text='Heat'
                isActive={mode === ModeTypes.HEAT}
            />
            <DisplayModeIcon
                icon='md-snow'
                text='Cool'
                isActive={mode === ModeTypes.COOL}
            />
            <DisplayModeIcon
                icon='md-water'
                text='Dry'
                isActive={mode === ModeTypes.DRY}
            />
            <DisplayModeIcon
                isActive={mode === ModeTypes.FAN}
                icon='fan'
                text='Fan'
                isMatIcon
            />
            <DisplayModeIcon
                isActive={mode === ModeTypes.AUTO}
                icon='brightness-auto'
                text='Auto'
                isMatIcon
            />
        </View>
        <View style={globalStyles.row}>
            <View style={styles.fanIconsContainer}>
                <DisplayModeIcon
                    isActive={fan === FanTypes.AUTO}
                    size={fanIconSize}
                    icon='brightness-auto'
                    isMatIcon
                />
                <DisplayModeIcon
                    isActive={fan !== FanTypes.AUTO}
                    size={fanIconSize}
                    icon='fan'
                    isMatIcon
                />
                <DisplayModeIcon
                    isActive={fan !== FanTypes.AUTO && fan >= FanTypes.MED}
                    size={fanIconSize}
                    icon='fan'
                    isMatIcon
                />
                <DisplayModeIcon
                    isActive={fan !== FanTypes.AUTO && fan === FanTypes.HI}
                    size={fanIconSize}
                    icon='fan'
                    isMatIcon
                />
            </View>
            <DisplayModeIcon
                isActive={turbo}
                size={40}
                icon='dumbbell'
                text='Turbo'
                isMatIcon
            />
            <DisplayModeIcon
                isActive={swing}
                size={40}
                icon='swap-vertical-bold'
                text='Swing'
                isMatIcon
            />
            <View style={styles.tempContainer}>
                <Text style={styles.tempText}>
                    {temp} &#x2103;
                </Text>
            </View>
        </View>
    </View>;


};

const styles = StyleSheet.create({
    displayContainer: {
        backgroundColor: '#ccc',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 10
    },
    marginBottom: {
        marginBottom: 6
    },
    tempContainer: {
        width: '25%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    tempText: {
        fontSize: 34,
        fontWeight: 'bold'
    },
    fanIconsContainer: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
});


export default Display;
