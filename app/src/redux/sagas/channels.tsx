import {eventChannel} from "redux-saga";
import firebase from "../../firebase";

export const createAuthChannel = () => {
    return eventChannel((emit) => {
        return firebase.auth().onIdTokenChanged(user => {
            if (user) {
                emit({user});
            } else {
                emit(new Error('User signed out'));
            }
        });
    });
};
