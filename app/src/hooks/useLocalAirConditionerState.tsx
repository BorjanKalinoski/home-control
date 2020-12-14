import {Dispatch, useCallback, useEffect, useReducer} from "react";
import {initialAcState} from "../constants/air-conditioner";
import firebase from "../firebase";
import AirConditionerState from "../models/AirConditionerState";

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

export default function useLocalAirConditionerState(deviceId: string): [AirConditionerState, Dispatch<any>] {

    const [state, dispatch] = useReducer(reducer, initialAcState);

    useEffect(() => {
        const fetchPreviousState = async () => {
            try {
                const snapshot = await firebase.database().ref(`${deviceId}/app_to_ino`).once('value');
                let acState: AirConditionerState = snapshot.val();

                if (!acState) {
                    acState = initialAcState;
                }
                dispatch({
                    ...acState,
                    type: SET_AC_STATE
                });
            } catch (e) {
                console.log('Error fetching state from ino', e);
                dispatch({});
            }
        };
        fetchPreviousState();
    }, [deviceId]);

    const dispatchLocalState = useCallback(async (newState: any) => {
        dispatch({
            ...state,
            ...newState,
            type: SET_AC_STATE,
            date: new Date().getTime()
        });
    }, [state, dispatch]);

    return [state, dispatchLocalState];
};
