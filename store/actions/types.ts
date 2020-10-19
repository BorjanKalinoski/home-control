import {FirebaseError} from "firebase";

export interface AuthState{
    error: null | FirebaseError;
    isLoading: boolean;
    isLoggedIn: boolean;
}


