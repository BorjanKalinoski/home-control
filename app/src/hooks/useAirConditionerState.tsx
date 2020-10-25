import {useCallback, useReducer} from "react";
enum Mode {
    HEAT, COOL, DRY, FAN, AUTO
}

enum Fan {
    LOW, MED, HI, AUTO,
}

const SET_AC_STATE = 'SET_AC_STATE';

const reducer = (state: any, action: any) => {
    const {temp, turbo, power, swing, mode, fan} = action;
    switch (action.type) {
        case SET_AC_STATE:
            return {
                ...state,
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
    mode: Mode.HEAT,
    temp: 23,
    fan: Fan.LOW,
    swing: false,
    turbo: false,
    power: false
};

export default function useAirConditionerState() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const mergeAndDispatchState = useCallback((newState: any) => {
        const mergedState = Object.assign(state, newState, {type: SET_AC_STATE});
        dispatch(mergedState);
    }, [state]);

    return [state, mergeAndDispatchState];
};
