import * as Api from "../../api";
import {put, call, takeLatest} from "redux-saga/effects";
import {AUTHENTICATION_FAILED, AUTHENTICATION_SUCCESS, AUTHENTICATE} from "../actions/types";

export function* authenticate(action: any) {
    try {
        const {email, password, isLoginScreen} = action.payload;

        if (isLoginScreen) {
            yield call(
                Api.loginWithEmailAndPassword,
                email,
                password
            );
        } else {
            yield call(
                Api.signUpWithEmailAndPassword,
                email,
                password
            );
        }

        yield put({
            type: AUTHENTICATION_SUCCESS
        });

    } catch (error) {
        yield put({
            type: AUTHENTICATION_FAILED,
            payload: {
                error
            }
        });
    }
}

export default function* watchAuth() {
    yield takeLatest(AUTHENTICATE, authenticate);
}
