import {useEffect, useRef, useState} from "react";
import firebase from "../firebase";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";
import AirConditionerState from "../models/AirConditioner";

let kur: AirConditionerState = {
    date: 0,
    fan: FanTypes.AUTO,
    mode: ModeTypes.COOL,
    power: false,
    swing: false,
    temp: 23,
    turbo: false
};

export default function useReceiveAirConditionerState(path: string, state: any) {

    const componentDidMount = useRef(true);
    const [acState, setAcState] = useState(kur);


    useEffect(() => {
        console.log('Rerender in receive!!');
        firebase.database().ref(`${path}/ino_to_app`).on('value', (snapshot) => {
            const response: AirConditionerState | null = snapshot.val();
            console.log('received!');
            console.log(snapshot);
            if (response) {
                setAcState(response);
            }
        });
    }, [path, firebase, setAcState]);
    return acState;
};
