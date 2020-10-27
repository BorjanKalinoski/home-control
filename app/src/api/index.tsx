import firebase from '../firebase';

export const signUpWithEmailAndPassword = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const loginWithEmailAndPassword = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const fetchDevices = (uid: string): Promise<firebase.database.DataSnapshot> => {
    return firebase.database().ref('devices').orderByChild('uid').equalTo(uid).once('value');
};

export const submitAirConditionerState = (path: string, state: any): Promise<any> => {
    return firebase.database().ref(`${path}/app_to_ino`).set({...state, date: firebase.database.ServerValue.TIMESTAMP});
};
