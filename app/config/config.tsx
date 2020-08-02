import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "home-control-e2300.firebaseapp.com",
  databaseURL: "https://home-control-e2300.firebaseio.com",
  projectId: "home-control-e2300",
  storageBucket: "home-control-e2300.appspot.com",
  appId: "home-control-e2300",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
export const db = app.database();
