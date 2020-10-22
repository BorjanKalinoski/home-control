import {SUBMIT_AC_STATE, FETCH_DEVICES} from "../../constants/actions";

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
