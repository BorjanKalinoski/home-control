import {
    AUTHENTICATE,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILED,
    CLEAR_AUTH_ERRORS, SIGNOUT_FAILED, SIGNOUT_SUCCESS,
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
                isLoggedIn: false
            };
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isSubmitting: false,
                isLoggedIn: false,
                isLoadingUser: false
            }
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                error: null,
                isSubmitting: false,
                isLoadingUser: false,
                isLoggedIn: true
            }
        case CLEAR_AUTH_ERRORS:
            return {
                ...state,
                error: null,
                isSubmitting: false,
                isLoadingUser: false
            };
        case SIGNOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isLoadingUser: false,
                error: null,
                isSubmitting: false,
            };
        case SIGNOUT_FAILED:
            return {
                ...state,
                isLoadingUser: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};
