import {useInoAirConditionerState, useLocalAirConditionerState} from "./index";
import AirConditionerState from "../models/AirConditionerState";
import {Dispatch} from "react";

export default function useAirConditionerStates(deviceId: string): [{
    state: AirConditionerState,
    dispatch: Dispatch<any>;
},
    AirConditionerState
] {

    const [localState, dispatchLocalState] = useLocalAirConditionerState(deviceId);

    const inoState = useInoAirConditionerState(deviceId);


    return [
        {
            state: localState,
            dispatch: dispatchLocalState
        },
        inoState
    ];
};
