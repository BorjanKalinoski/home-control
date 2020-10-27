import {SUBMIT_AC_STATE, FETCH_DEVICES} from "./types";

export const fetchDevices = () => ({
    type: FETCH_DEVICES,
});

export const submitAirConditionerState = (path: string, state: any) => ({
    type: SUBMIT_AC_STATE,
    payload: {
        path,
        state
    }
});
