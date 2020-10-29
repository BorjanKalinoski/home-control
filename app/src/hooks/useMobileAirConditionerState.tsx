import {useCallback, useEffect, useReducer, useRef} from "react";
import {initialAcState} from "../constants/air-conditioner";
import firebase from "../firebase";
import AirConditioner from "../models/AirConditioner";
const SET_AC_STATE = 'SET_AC_STATE';

const reducer = (state: any, action: any) => {
    const {temp, turbo, power, swing, mode, fan, date} = action;
    switch (action.type) {
        case SET_AC_STATE:
            return {
                temp,
                turbo,
                power,
                swing,
                mode,
                fan,
                date: Math.floor(date)
            };
        default:
            return state;
    }
};

export default function useMobileAirConditionerState(deviceId: string) {

    const [state, dispatch] = useReducer(reducer, initialAcState);

    useEffect(() => {
        const fetchPreviousState = async () => {
            try {
                const snapshot = await firebase.database().ref(`${deviceId}/app_to_ino`).once('value');
                let response: AirConditioner = snapshot.val();

                if (!response) {
                    response = initialAcState;
                }
                dispatch({
                    ...response,
                    type: SET_AC_STATE
                });
            } catch (e) {
                console.log('Error fetching state from ino', e);
                dispatch({});
            }
        };
        fetchPreviousState();
    }, []);

    const modifyAndDispatchState = useCallback(async (modifiedState: any) => {
        dispatch({
            ...state,
            ...modifiedState,
            type: SET_AC_STATE,
            date: new Date().getTime()
        });
    }, [state, dispatch]);

    return [state, modifyAndDispatchState];
};
