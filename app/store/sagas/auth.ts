import * as Api from "../../api";
import {put, call, takeEvery} from "redux-saga/effects";
import {AUTHENTICATION_FAILED, AUTHENTICATION_SUCCESS, TRY_AUTHENTICATE} from "../../constants/actions";

export function* tryAuthenticate(action: any) {
    const {email, password, isLogin} = action.payload;
    try {
        let userData;
        if (isLogin) {
            userData = yield call(Api.loginWithEmailAndPassword, email, password);
        } else {
            userData = yield call(Api.signUpWithEmailAndPassword, email, password);
        }
        yield put({type: AUTHENTICATION_SUCCESS, userData})
    } catch (error) {
        switch (error.code) {
            case 'auth/user-not-found':
                error.message = 'The user does not exist.';
                break;
            case 'auth/too-many-requests':
                error.message = 'Access is to this account has been temporarily disabled. Try again later.';
                break;
        }
        yield put({type: AUTHENTICATION_FAILED, error});
    }
}

export function* watchAuth() {
    yield takeEvery(TRY_AUTHENTICATE, tryAuthenticate);
}
