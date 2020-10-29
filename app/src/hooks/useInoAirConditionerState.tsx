import {useEffect, useState} from "react";
import firebase from "../firebase";
import {initialAcState} from "../constants/air-conditioner";
import AirConditioner from "../models/AirConditioner";

export default function useInoAirConditionerState(deviceId: string) {

    const [acState, setAcState] = useState(initialAcState);

    useEffect(() => {
        const referencePath = `${deviceId}/ino_to_app`;

        firebase.database().ref(referencePath).on('value', (snapshot) => {
            const response: AirConditioner = snapshot.val();
            if (response) {
                setAcState(response);
            }
        });

        return () => {
            firebase.database().ref(referencePath).off('value');
        };
    }, [deviceId, firebase, setAcState]);
    return acState;
};
