import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUA9YLmTeGmTkQag4ixpceNYADyLlvrT8",
    authDomain: "home-control-fe934.firebaseapp.com",
    databaseURL: "https://home-control-fe934.firebaseio.com",
    projectId: "home-control-fe934",
    storageBucket: "home-control-fe934.appspot.com",
    messagingSenderId: "882537633036",
    appId: "1:882537633036:web:07a9fcd8d5ef887d6ae529",
    measurementId: "G-XS9N0GB1BL"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

