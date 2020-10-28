import {all} from 'redux-saga/effects';
import {watchAuth, watchDevices} from "./index";

export default function* rootSaga() {
    yield all([
        watchDevices(),
        watchAuth()
    ]);
};
