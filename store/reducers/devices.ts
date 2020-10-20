import {FETCH_DEVICES_FAILED, FETCH_DEVICES_SUCCESS} from "../../constants/actions";

const initialState = {
    devices: [],
    error: null
};

export default (state = initialState, action: any) => {
    const {error, devices, type} = action;
    switch (type) {
        case FETCH_DEVICES_SUCCESS:
            return {
                ...state,
                devices,
                error: null
            };
        case FETCH_DEVICES_FAILED:
            return {
                ...state,
                devices: [],
                error
            }
        default:
            return state;
    }
};
