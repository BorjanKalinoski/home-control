import {FETCH_DEVICES, FETCH_DEVICES_FAILED, FETCH_DEVICES_SUCCESS} from "../../constants/actions";

const initialState = {
    devices: [],
    isLoading: true,
    error: null
};

export default (state = initialState, action: any) => {
    const {error, devices, type} = action;
    switch (type) {
        case FETCH_DEVICES:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_DEVICES_SUCCESS:
            return {
                ...state,
                devices,
                error: null,
                isLoading: false
            };
        case FETCH_DEVICES_FAILED:
            return {
                ...state,
                devices: [],
                error,
                isLoading: false
            }
        default:
            return state;
    }
};
