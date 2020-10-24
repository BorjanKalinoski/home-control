import {SUBMIT_AC_STATE, FETCH_DEVICES} from "./types";

export const fetchDevices = () => ({
    type: FETCH_DEVICES,
});

export const submitAcState = (devicePath: string, acState: any) => ({
    type: SUBMIT_AC_STATE,
    payload: {
        devicePath,
        acState
    }
});
