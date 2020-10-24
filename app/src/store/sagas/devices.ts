import * as Api from '../../api';
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import firebase from '../../firebase';

import {
    FETCH_DEVICES,
    FETCH_DEVICES_FAILED,
    FETCH_DEVICES_SUCCESS,
    LOGOUT,
    SUBMIT_AC_STATE
} from "../actions/types";

export function* fetchDevices(action: any) {
    try {
        let uid = firebase.auth().currentUser?.uid;

        if (!uid) {
            yield put({
                type: LOGOUT
            });
            return;
        }

        //.val() returns null if there is no data
        //.exists() returns false if there is no data

        const snapshot = yield call(Api.fetchDevices, uid);
        const devicesValue = snapshot.val();
        if (!devicesValue) {
            yield put({
                type: FETCH_DEVICES_SUCCESS,
                devices: []
            });
            return;
        }

        const devices = [];
        for (const key in devicesValue) {
            devices.push({
                key,
                name: devicesValue[key].name,
                type: devicesValue[key].type,
                uid: devicesValue[key].uid
            });
        }

        yield put({
            type: FETCH_DEVICES_SUCCESS,
            devices
        });

    } catch (error) {
        yield put({
            type: FETCH_DEVICES_FAILED,
            payload: {
                error
            }
        });
    }
}

export function* submitAcState(action: any) {
    const {devicePath, acState} = action.payload;
    try{
        const response = yield firebase.database().ref(devicePath).set(acState);
    } catch (e) {
        console.log('wawaawawawaw!', e);
    }
}

export default function* watchDevices() {
    yield takeEvery(FETCH_DEVICES, fetchDevices);
    yield takeLatest(SUBMIT_AC_STATE, submitAcState);
}
