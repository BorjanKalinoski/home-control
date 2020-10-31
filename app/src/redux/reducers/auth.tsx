import {
    AUTHENTICATE,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILED,
    CLEAR_AUTH_ERRORS,
    LOAD_USER,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILED
} from "../actions/types";

const initialState = {
    error: null,
    isSubmitting: false,
    isLoggedIn: false,
    isLoadingUser: true
};

export default (state = initialState, action: any) => {

    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                error: null,
                isSubmitting: true,
            };
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isSubmitting: false,
            }
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                error: null,
                isSubmitting: false
            }
        case CLEAR_AUTH_ERRORS:
            return {
                ...state,
                error: null,
                isSubmitting: false,
                isLoadingUser: false
            };
        case LOAD_USER:
            return {
                ...state,
                isLoadingUser: true,
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoadingUser: false
            };
        case LOAD_USER_FAILED: //TODO logout niga
            return {
                ...state,
                isLoggedIn: false,
                isLoadingUser: false,
                error: null,
                isSubmitting: false,
            };
        default:
            return state;
    }
};
