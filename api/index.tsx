import  {auth} from "firebase";

export const signUpWithEmailAndPassword = (email: string, password: string): Promise<auth.UserCredential> => {
    return auth().createUserWithEmailAndPassword(email, password);
};

export const loginWithEmailAndPassword = (email: string, password: string): Promise<auth.UserCredential> => {
    return auth().signInWithEmailAndPassword(email, password);
};

