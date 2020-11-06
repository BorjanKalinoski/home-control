import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";
import {globalStyles} from "../../styles";
import {Icon} from "react-native-elements";
import firebase from '../../firebase';

interface RoomSensor {
    temp:number;
    humidity: number;
    date: number;
}

const DisplayTempAndHumidity = ({deviceId}) => {
    const [temp, setTemp] = useState(23.23);
    const [humidity, setHumidity] = useState(36.62);

    useEffect(() => {
        const refPath = `${deviceId}/ino_to_app/sensor`;
        firebase.database().ref(refPath).on('value', (snapshot) => {
            const response = snapshot.val();
            if (response) {
                setTemp(response.temp.toFixed(2));
                setHumidity(response.humidity.toFixed(2));
            }
        });
        return () => {
            firebase.database().ref(refPath).off('value');
        }
    }, []);

    return <View style={styles.container}>
            <View style={styles.row}>
                <Icon name='temperature-low' type='font-awesome-5' size={40} color={Colors.black}/>
                <Text style={styles.text}>{temp} &#x2103;</Text>
            </View>
            <View style={styles.row}>
                <Icon name='water' type='entypo' size={40} color={Colors.black}/>
                <Text style={styles.text}>{humidity} %</Text>
            </View>
    </View>;
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGray,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        width:'100%',
        marginVertical: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        // borderWidth:1,
    },
    text:{
        marginLeft: 30,
        fontSize: 32,
        color: Colors.black,
        fontWeight: 'bold',
        // borderWidth:1,
    }
});
export default DisplayTempAndHumidity;
