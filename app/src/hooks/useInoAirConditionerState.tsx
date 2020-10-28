import {useEffect, useRef, useState} from "react";
import firebase from "../firebase";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";
import AirConditionerState from "../models/AirConditioner";
import {devicesActions} from '../redux/actions';
import {useDispatch} from "react-redux";

let kur: AirConditionerState = {
    date: 0,
    fan: FanTypes.AUTO,
    mode: ModeTypes.COOL,
    power: false,
    swing: false,
    temp: 23,
    turbo: false
};

export default function useInoAirConditionerState(path: string, state: any) {

    const [acState, setAcState] = useState(kur);
    const dispatch = useDispatch();

    useEffect(() => {
        const referencePath = `${path}/ino_to_app`;

        dispatch(devicesActions.fetchAirConditionerStateFromIno(path));
        //TODO sync shit here if needed
        //Opcija 1 -> polesna, tuka da se hendlaat .on() rabotite i da se dispatchnuvaat akcii soodvetno
        //Opcija 2 -> da se razgledaat actionChannels n shit od redux saga
        firebase.database().ref(referencePath).on('value', (snapshot) => {
            const response: AirConditionerState | null = snapshot.val();
            if (response) {
                setAcState(response);
            }
        });

        return () => {
            firebase.database().ref(referencePath).off('value');
        };
    }, [path, firebase, setAcState]);
    return acState;
};
