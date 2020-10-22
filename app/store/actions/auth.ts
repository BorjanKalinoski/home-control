import {AUTHENTICATION_FAILED, TRY_AUTHENTICATE} from "../../constants/actions";

export const tryAuthenticateWithEmailAndPassword = (email: string, password: string, isLogin: boolean) => ({
    type: TRY_AUTHENTICATE,
    payload: {
        email,
        password,
        isLogin
    }
});

export const authenticationFailed = (error: any) => ({
    type: AUTHENTICATION_FAILED,
    payload: {
        error
    }
});


