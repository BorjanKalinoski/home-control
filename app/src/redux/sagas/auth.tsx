import * as Api from "../../api";
import {put, call, takeLatest, take, fork} from "redux-saga/effects";
import {AUTHENTICATE, SIGNOUT} from "../actions/types";
import {authActions, devicesActions} from "../actions";
import {createAuthChannel} from "./channels";

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

        yield put(authActions.authenticationSuccess());

    } catch (error) {
        yield put(authActions.authenticationFailed(error));
    }
}

function* watchAuthChannel() {
    const authChannel = yield call(createAuthChannel);
    while (true) {
        try {
            yield take(authChannel);
            yield put(authActions.authenticationSuccess());
            yield put(devicesActions.fetchDevices());
        } catch (e) {
            yield put(authActions.signOutSuccess());
        }
    }
}

function* signOut() {
    try {
        yield call(Api.signOut);
        yield put(authActions.signOutSuccess());
    } catch (e) {
        yield put(authActions.signOutFailed(e));
    }
}


export default function* watchAuth() {
    yield takeLatest(AUTHENTICATE, authenticate);
    yield takeLatest(SIGNOUT, signOut);
    yield fork(watchAuthChannel);
}
