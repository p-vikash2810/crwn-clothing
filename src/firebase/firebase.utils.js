import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6WHNuyiVz1P7WfSrP1ghUQzlYpnqSoYM",
  authDomain: "crawn-db-eedbc.firebaseapp.com",
  projectId: "crawn-db-eedbc",
  storageBucket: "crawn-db-eedbc.appspot.com",
  messagingSenderId: "608829353068",
  appId: "1:608829353068:web:59252a8e659cdbf479fc49",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
