import * as Api from "../../api";
import {put, call, takeEvery} from "redux-saga/effects";
import {AUTHENTICATE, AUTHENTICATION_FAILED, TRY_AUTHENTICATE} from "../../constants/actions";

export function* tryAuthenticate(action: any) {//moze i tuka type da se prati SignUp/LogIn i da ima samo if else za userData bla bla
    const {email, password, isLogin} = action.payload;
    try {
        let userData;
        if (isLogin) {
            userData = yield call(Api.loginWithEmailAndPassword, email, password);
        }else{
            userData = yield call(Api.signUpWithEmailAndPassword, email, password);
        }
        yield put({type: AUTHENTICATE, userData})
    } catch (error) { //instace of firebase error
        console.log('wawawawwa!');
        console.log(error.code);
        //error.code
        //auth/invalid-email
        //auth/weak-password
        //auth/email-already-in-use
        //auth/user-not-found


        yield put({type: AUTHENTICATION_FAILED, error});
    }
}

export function* watchAuth() {
    yield takeEvery(TRY_AUTHENTICATE, tryAuthenticate);
}
