import * as Api from "../../api";
import {put, call, takeLatest, take, fork} from "redux-saga/effects";
import {AUTHENTICATE, LOGOUT} from "../actions/types";
import {eventChannel} from "redux-saga";
import firebase from "../../firebase";

import {authActions, devicesActions} from "../actions";

function createAuthChannel() {
    return eventChannel((emit) => {
        const unsubscribe = firebase.auth().onIdTokenChanged(user => {
            if (user) {
                emit({user});
            } else {
                emit(new Error('User not logged in'));
            }
        });
        return unsubscribe;
    });
}

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
            yield put(authActions.loadUserSuccess());
            yield put(devicesActions.fetchDevices());//For development purposes only
        } catch (e) {
            console.log('tuka a!');
            yield put(authActions.loadUserFailed());
        }
    }
}

function* logout() {
        try{
            yield call(Api.logout);
        }catch (e) {
            console.log('????');
        }
}

export default function* watchAuth() {
    yield takeLatest(AUTHENTICATE, authenticate);
    yield takeLatest(LOGOUT, logout);
    yield fork(watchAuthChannel);
}
