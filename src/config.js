import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const app = firebase.initializeApp({
    apiKey: "AIzaSyBhehNwtt5FbPbQYYWXyG5nkukLbo4VZv4",
    authDomain: "cuidamos-san-rafael.firebaseapp.com",
    projectId: "cuidamos-san-rafael",
    storageBucket: "cuidamos-san-rafael.appspot.com",
    messagingSenderId: "701817980677",
    appId: "1:701817980677:web:5265a3d4ec2bf66985d96c"
});
