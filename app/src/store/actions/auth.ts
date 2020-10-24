import {LOAD_USER_SUCCESS, LOAD_USER_FAILED, AUTHENTICATE, CLEAR_AUTH_ERRORS, LOAD_USER} from "./types";

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

export const loadUser = () => ({
    type: LOAD_USER
});

export const loadUserSuccess = () => ({
    type: LOAD_USER_SUCCESS,
});

export const loadUserFailed = () => ({
    type: LOAD_USER_FAILED,
});


