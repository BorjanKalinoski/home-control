import {StyleSheet, View} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {globalStyles} from "../../styles";
import React from "react";

const PowerAndTempButtons = (props: any) => {

    return <View style={styles.powerAndTempButtonsContainer}>
        <MaterialCommunityIcons
            style={{backgroundColor: '#ccc', borderRadius: 25, elevation: 0}}
            color={'black'}
            size={50}
            name={'power'}
        />
        <View style={{...globalStyles.row, ...styles.tempButtonsContainer}}>
            <Ionicons
                size={50}
                name='ios-arrow-down'
                style={styles.tempButton}
            />
            <Ionicons
                size={50}
                name='ios-arrow-up'
                style={styles.tempButton}
            />
        </View>
    </View>;
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
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default PowerAndTempButtons;
