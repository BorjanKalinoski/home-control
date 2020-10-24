import {IS_USER_LOADED, AUTHENTICATE, CLEAR_AUTH_ERRORS} from "./types";

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

export const isUserLoaded = (isLoggedIn: boolean) => ({
    type: IS_USER_LOADED,
    payload: {
        isLoggedIn
    }
});


