import {
    AUTHENTICATE,
    CLEAR_AUTH_ERRORS,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILED,
    SIGNOUT,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAILED
} from "./types";


export const authenticateWithEmailAndPassword = (email: string, password: string, isLoginScreen: boolean) => ({
    type: AUTHENTICATE,
    payload: {
        email,
        password,
        isLoginScreen
    }
});

export const authenticationSuccess = () => ({
    type: AUTHENTICATION_SUCCESS
});

export const authenticationFailed = (error: any) => ({
    type: AUTHENTICATION_FAILED,
    payload: {
        error
    }
});

export const clearAuthErrors = () => ({
    type: CLEAR_AUTH_ERRORS
});

export const signOut = () => ({
    type: SIGNOUT
});

export const signOutSuccess = () => ({
    type: SIGNOUT_SUCCESS
});

export const signOutFailed = (error: any) => ({
    type: SIGNOUT_FAILED,
    payload: {
        error
    }
});
