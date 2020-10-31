import {call, put, takeLatest} from "redux-saga/effects";
import * as Api from '../../api';
import firebase from '../../firebase';
import {FETCH_DEVICES, SUBMIT_AC_STATE} from "../actions/types";
import {authActions, devicesActions} from "../actions";

export function* fetchDevices() {//TODO refactor this
    try {
        let uid = firebase.auth().currentUser?.uid;

        if (!uid) {
            yield put(authActions.signOut());
            return;
        }

        const snapshot = yield call(Api.fetchDevices, uid);
        const devicesValue = snapshot.val();

        if (!devicesValue) {
            yield put(devicesActions.fetchDevicesSuccess([]));
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

        //Dokolku se cuva nekakov globalen state na uredite, od tuka treba da se konfigurishe

        yield put(devicesActions.fetchDevicesSuccess(devices));

    } catch (error) {
        yield put(devicesActions.fetchDevicesFailed(error));
    }
}

export function* submitAcState(action: any) {
    const {path, state} = action.payload;
    try {
        yield call(Api.submitAirConditionerState, path, state);
    } catch (error) {
        console.log('an error has occured', error);
        yield put(devicesActions.submitAirConditionerStateFailed(path, error));
    }
}

export default function* watchDevices() {
    yield takeLatest(FETCH_DEVICES, fetchDevices);
    yield takeLatest(SUBMIT_AC_STATE, submitAcState);
}
