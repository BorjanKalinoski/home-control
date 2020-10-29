import {
    SUBMIT_AC_STATE,
    FETCH_DEVICES,
    FETCH_AC_STATE_FROM_INO,
    FETCH_DEVICES_SUCCESS,
    FETCH_DEVICES_FAILED,
    SUBMIT_AC_STATE_FAILED,
    CLEAR_DEVICE_ERRORS
} from "./types";


export const fetchDevices = () => ({
    type: FETCH_DEVICES,
});

export const fetchDevicesSuccess = (devices: any[]) => ({
    type: FETCH_DEVICES_SUCCESS,
    payload: {
        devices
    }
});

export const fetchDevicesFailed = (error: any) => ({
    type: FETCH_DEVICES_FAILED,
    payload: {
        error
    }
});

export const submitAirConditionerState = (path: string, state: any) => ({
    type: SUBMIT_AC_STATE,
    payload: {
        path,
        state
    }
});

export const submitAirConditionerStateFailed = (deviceId: string, error: any) => ({
    type: SUBMIT_AC_STATE_FAILED,
    payload: {
        deviceId,
        error
    }
});

export const clearDeviceErrors = (deviceId: string) => ({
    type: CLEAR_DEVICE_ERRORS,
    payload: {
        deviceId
    }
});



export const fetchAirConditionerStateFromIno = (deviceId: string) => ({
    type: FETCH_AC_STATE_FROM_INO,
    payload: {
        deviceId
    }
});
