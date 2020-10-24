import {all} from 'redux-saga/effects';
import {watchAuth, watchDevices} from "./sagas";

export default function* rootSaga() {
    yield all([
        watchDevices(),
        watchAuth()
    ]);
};
