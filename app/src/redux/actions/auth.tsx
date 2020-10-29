import {
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILED,
    AUTHENTICATE,
    CLEAR_AUTH_ERRORS,
    LOGOUT,
    AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILED
} from "./types";

export const authenticationFailed = (error: any) => ({
    type: AUTHENTICATION_FAILED,
    payload: {
        error
    }
});


export const authenticationSuccess = () => ({
    type: AUTHENTICATION_SUCCESS
});


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

export const logout = () => ({
    type: LOGOUT
});

export const loadUserSuccess = () => ({
    type: LOAD_USER_SUCCESS,
});

export const loadUserFailed = () => ({
    type: LOAD_USER_FAILED,
});


