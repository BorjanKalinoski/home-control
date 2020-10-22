import {
    AUTHENTICATION_FAILED,
    AUTHENTICATION_SUCCESS, CLEAR_ERRORS,
    LOGOUT,
    TRY_AUTHENTICATE
} from "../../constants/actions";

const initialState = {
    error: null,
    isLoading: false
};

//TODO SET TYPES
export default (state = initialState, action: any) => {

    const {error, type} = action;
    switch (type) {
        case TRY_AUTHENTICATE:
            return {
                ...state,
                error: null,
                isLoading: true,
            }
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                error,
                isLoading: false,
            }
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
                isLoading: false
            };

        case LOGOUT:
            return {
                ...state,
                error: null,
                isLoading: false
            };
        default:
            return state;
    }
};
