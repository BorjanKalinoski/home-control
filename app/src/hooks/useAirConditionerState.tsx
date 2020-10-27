import {useCallback, useReducer} from "react";
import {FanTypes, ModeTypes} from "../constants/air-conditioner";

const SET_AC_STATE = 'SET_AC_STATE';

const reducer = (state: any, action: any) => {
    const {temp, turbo, power, swing, mode, fan} = action;
    switch (action.type) {
        case SET_AC_STATE:
            return {
                temp,
                turbo,
                power,
                swing,
                mode,
                fan
            };
        default:
            return state;
    }
};

const initialState = {
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
        const mergedState = Object.assign(state, newState, {type: SET_AC_STATE});
        dispatch(mergedState);
    }, [state, dispatch]);

    return [state, mergeAndDispatchState];
};
