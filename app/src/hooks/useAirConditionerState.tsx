import {useCallback, useReducer} from "react";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";
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
                date
            };
        default:
            return state;
    }
};

const initialState = {
    date: new Date().getTime(),
    mode: ModeTypes.HEAT,
    temp: 23,
    fan: FanTypes.LOW,
    swing: false,
    turbo: false,
    power: false
};

export default function useAirConditionerState() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const mergeAndDispatchState = useCallback((newState: any) => {
        const mergedState = Object.assign(state, newState, {type: SET_AC_STATE, date: new Date().getTime()});
        dispatch(mergedState);
    }, [state, dispatch]);

    return [state, mergeAndDispatchState];
};
