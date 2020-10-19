import {
    AUTHENTICATION_FAILED,
    AUTHENTICATION_SUCCESS, CLEAR_ERRORS,
    LOGOUT,
    TRY_AUTHENTICATE
} from "../../constants/actions";

const initialState = {
    isLoggedIn: true,
    error: null,
    isLoading: false
};

//TODO SET TYPES
export default (state = initialState, action: any) => {

    switch (action.type) {
        case TRY_AUTHENTICATE:
            return {
                ...state,
                error: null,
                isLoading: true,
                isLoggedIn: false
            }
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
                isLoggedIn: false,
            }
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                user: true
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
                user: null,
                error: null,
                isLoading: false
            };
        default:
            return state;
    }
};
