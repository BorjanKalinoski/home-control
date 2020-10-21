import * as Api from '../../api';

import {call, put, takeEvery} from "redux-saga/effects";
import {FETCH_DEVICES, FETCH_DEVICES_FAILED, FETCH_DEVICES_SUCCESS} from "../../constants/actions";
import {firebase} from '../../firebase/config';

export function* fetchDevices(action: any) {
    try {
        const snapshot = yield call(Api.fetchDevices);
        const devicesValue = snapshot.val();
        //.val() returns null if there is no data
        //.exists() returns false if there is no data
        if (!devicesValue) {
            yield put({
                type: FETCH_DEVICES_SUCCESS,
                devices: []
            });
            return;
        }

        const devicesArray = [];
        for (const key in devicesValue) {
            devicesArray.push({
                key,
                name: devicesValue[key].name,
                type: devicesValue[key].type,
                uid: devicesValue[key].uid
            });
        }

        const filteredDevices = devicesArray.filter(device => device.uid === firebase.auth().currentUser?.uid);

        yield put({
            type: FETCH_DEVICES_SUCCESS,
            devices: filteredDevices
        });

    } catch (error) {
        console.log('an error has occured nigga');
        console.log(error);
        yield put({
            type: FETCH_DEVICES_FAILED,
            error
        });
    }
}


export function* watchDevices() {
    yield takeEvery(FETCH_DEVICES, fetchDevices);
}

