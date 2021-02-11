import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcKxrMmvzJifPeatIPI8H8Oe-ipksQi_w",
    authDomain: "kyuk-4f34b.firebaseapp.com",
    projectId: "kyuk-4f34b",
    databaseURL: "https://kyuk-4f34b.firebaseio.com",
    storageBucket: "kyuk-4f34b.appspot.com",
    messagingSenderId: "976446368067",
    appId: "1:976446368067:web:6df5c54a926388851567f6",
    measurementId: "G-R7CR7GR6VC"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export const fbdb = firebase.firestore();

