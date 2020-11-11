import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";
import firebase from '../../firebase';
import Speedometer from 'react-native-speedometer-chart';

const DisplayTempAndHumidity = ({deviceId}) => {
    const [date, setDate] = useState(0);
    const [temp, setTemp] = useState(24.23);
    const [humidity, setHumidity] = useState(36.62);
    const [tempInvalid, setTempInvalid] = useState(false);
    const [humidityInvalid, setHumidityInvalid] = useState(false);

    useEffect(() => {
        const refPath = `${deviceId}/ino_to_app/sensor`;
        firebase.database().ref(refPath).on('value', (snapshot) => {
            const response = snapshot.val();
            setTempInvalid(false);
            setHumidityInvalid(false);
            if (response) {
                const {temp, humidity, date} = response;
                setDate(date);
                setTemp(parseFloat(temp.toFixed(2)));
                setHumidity(parseFloat(humidity.toFixed(2)));
                if (temp > 100 || temp < -20) {
                    setTemp(0);
                    setTempInvalid(true);
                }
                if (humidity < 0 || humidity > 100) {
                    setHumidity(0);
                    setHumidityInvalid(true);
                }
            }
        });

        return () => {
            firebase.database().ref(refPath).off('value');
        }
    }, []);

    const invalidStyle = {color: Colors.yellow};

    return <View style={styles.container}>
        <View style={styles.progressContainer}>
            <View style={{borderWidth: 0, alignItems: 'center'}}>
                <Speedometer
                    value={temp}
                    totalValue={50}
                    size={120}
                    showIndicator
                />
                <Text style={tempInvalid ? {...styles.text, ...invalidStyle} : styles.text}>
                    T: {tempInvalid ? 'NaN' : temp} {tempInvalid ? '' : <Text>&#x2103;</Text>}
                </Text>
            </View>
            <View style={{borderWidth: 0, alignItems: 'center'}}>
                <Speedometer
                    value={humidity}
                    totalValue={100}
                    size={120}
                    showIndicator
                />
                <Text style={humidityInvalid ? {...styles.text, ...invalidStyle} : styles.text}>
                    H: {humidityInvalid ? 'NaN' : `${humidity} %`}
                </Text>
            </View>
        </View>
        <Text style={styles.date}>
            {new Date(date).toLocaleTimeString()} {new Date(date).toLocaleDateString()}
        </Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGray,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
    },
    progressContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: 'bold'
    },
    date: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight:'bold',
        marginTop:10
    }
});

export default DisplayTempAndHumidity;