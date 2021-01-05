import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_VJxs1ZftE8FPL2jKbzxgSNJxSZoKqNI",
    authDomain: "facebook-messenger-clone-b4510.firebaseapp.com",
    projectId: "facebook-messenger-clone-b4510",
    storageBucket: "facebook-messenger-clone-b4510.appspot.com",
    messagingSenderId: "770395980860",
    appId: "1:770395980860:web:f04586e8e5de08ff0a2f39",
    measurementId: "G-PBJ2ZPHTGR"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;