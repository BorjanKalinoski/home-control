import {AUTHENTICATE, AUTHENTICATION_FAILED, TRY_AUTHENTICATE} from "../../constants/actions";

export const tryAuthenticateWithEmailAndPassword = (email: string, password: string) => ({
    type: TRY_AUTHENTICATE,
    payload: {
        email,
        password
    }
});

export const authenticationFailed = (error: any) => ({
    type: AUTHENTICATION_FAILED,
    payload: {
        error
    }
});


