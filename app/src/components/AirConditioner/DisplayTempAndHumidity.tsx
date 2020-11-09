import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";
import {Icon} from "react-native-elements";
import firebase from '../../firebase';

const DisplayTempAndHumidity = ({deviceId}) => {
    const [temp, setTemp] = useState(23.23);
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
                const {temp, humidity} = response;
                setTemp(temp.toFixed(2));
                setHumidity(humidity.toFixed(2));
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
        <View style={styles.row}>
            <Icon name='temperature-low' type='font-awesome-5' size={40} color={Colors.black}/>
            <Text style={humidityInvalid ? {...styles.text, ...invalidStyle} : styles.text}>{temp} &#x2103;</Text>
        </View>
        <View style={styles.row}>
            <Icon name='water' type='entypo' size={40} color={Colors.black}/>
            <Text style={tempInvalid ? {...styles.text, ...invalidStyle} : styles.text}>{humidity} %</Text>
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
