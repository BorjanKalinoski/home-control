import * as Api from "../../api";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects";
import {AUTHENTICATE, AUTHENTICATION_FAILED, TRY_AUTHENTICATE} from "../../constants/actions";
import {FirebaseError} from "firebase";

export function* tryAuthenticate(action: any) {
    const {email, password} = action.payload;
    try {
        const userData = yield call(Api.signUpWithEmailAndPassword, email, password);
        yield put({type: AUTHENTICATE, userData})
    } catch (error) { //instace of firebase error
        console.log('wawawawwa!');
        console.log(error.code);
        //error.code
        //auth/invalid-email
        //auth/weak-password
        //auth/email-already-in-use

        yield put({type: AUTHENTICATION_FAILED, error});
    }
}

export function* watchAuthenticate() {
    yield takeEvery(TRY_AUTHENTICATE, tryAuthenticate);
}
