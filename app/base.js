import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBHqnCNbH1cavuzN_upcG0clqRZewPGPrM",
    authDomain: "raising-rose.firebaseapp.com",
    databaseURL: "https://raising-rose.firebaseio.com"

});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;