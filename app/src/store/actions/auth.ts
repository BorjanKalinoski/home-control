import {LOAD_USER_DETAILS, AUTHENTICATE, CLEAR_AUTH_ERRORS} from "./types";

export const authenticateWithEmailAndPassword = (email: string, password: string, isLoginScreen: boolean) => ({
    type: AUTHENTICATE,
    payload: {
        email,
        password,
        isLoginScreen
    }
});

export const clearAuthErrors = () => ({
    type: CLEAR_AUTH_ERRORS
});

export const loadUserDetails = (isLoggedIn: boolean) => ({
    type: LOAD_USER_DETAILS,
    payload: {
        isLoggedIn
    }
});


