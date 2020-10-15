import {AUTHENTICATE, LOGOUT} from "../actions/auth";
import firebase from "firebase";
import AuthCredential = firebase.auth.AuthCredential;
// import firebase from "firebase";
// import AuthCredential = firebase.auth.AuthCredential;
// import AuthCredential from 'firebase/auth';
interface User {
    // credential:
    user: {
        displayName: string | null;
        email: string | null;
        phoneNumber: string | null;
        photoURL: string | null;
        providerId: string;
        uid: string;
    },
    credentials?: AuthCredential;
}

const initialState: User = {
    user: {
        displayName: null,
        email: null,
        phoneNumber: null,
        photoURL: null,
        providerId: '',
        uid: ''
    },
    // credentials:{
    //
    // }
};



export default (state = initialState, action) => {
    switch (action.type){
        case AUTHENTICATE:
        case LOGOUT:
        default:
            return state;
    }
};

