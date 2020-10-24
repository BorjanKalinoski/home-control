import {
    AUTHENTICATE,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILED,
    LOAD_USER_DETAILS,
    CLEAR_AUTH_ERRORS,
    LOGOUT
} from "../actions/types";

const initialState = {
    error: null,
    isLoading: false,
    isLoggedIn: false
};

export default (state = initialState, action: any) => {

    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            }
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                isLoggedIn: true
            }
        case CLEAR_AUTH_ERRORS:
            return {
                ...state,
                error: null,
                isLoading: false
            };
        case LOGOUT:
            return {
                ...state,
                error: null,
                isLoading: false,
                isLoggedIn: false
            };
        case LOAD_USER_DETAILS:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn
            };
        default:
            return state;
    }
};
