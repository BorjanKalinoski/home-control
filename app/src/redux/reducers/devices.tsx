import {
    FETCH_DEVICES,
    FETCH_DEVICES_FAILED,
    FETCH_DEVICES_SUCCESS,
    SUBMIT_AC_STATE_FAILED,
    SUBMIT_AC_STATE_SUCCESS,
    CLEAR_DEVICE_ERRORS
} from "../actions/types";

const initialState = {
    devices: [],
    isLoading: true,
    error: null
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_DEVICES:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_DEVICES_SUCCESS:
            return {
                ...state,
                devices: action.payload.devices,
                error: null,
                isLoading: false,
            };
        case FETCH_DEVICES_FAILED:
            return {
                ...state,
                devices: [],
                error: action.payload.error,
                isLoading: false
            };
        case SUBMIT_AC_STATE_FAILED:
            return {
                ...state,
                [action.payload.deviceId]: {
                    error: action.payload.error
                }
            };
        case CLEAR_DEVICE_ERRORS: {
            return {
                ...state,
                [action.payload.deviceId]: {
                    error: null
                }
            };
        }
        default:
            return state;
    }
};
