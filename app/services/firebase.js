import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrp3kVU2XSCWP1UQIzfXhGAmvXw8z-bKs",
  authDomain: "grocr-c8b8e.firebaseapp.com",
  databaseURL: "https://grocr-c8b8e.firebaseio.com",
  projectId: "grocr-c8b8e",
  storageBucket: "grocr-c8b8e.appspot.com",
  messagingSenderId: "368191326095",
  appId: "1:368191326095:web:4d4d4c2c363a79c05dadfa",
  measurementId: "G-JXED4G9N6J",
};

firebase.initializeApp(firebaseConfig);

export const authentication = firebase.auth();
export const database = firebase.database();
export const getServerTime = () => firebase.database.ServerValue.TIMESTAMP;
