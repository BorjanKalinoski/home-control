import {watchAuth} from "./auth";
import {watchDevices} from "./devices";
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        watchDevices(),
        watchAuth()
    ]);
};
