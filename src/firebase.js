// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDt69DvVcsAXIoHo7l7GB77aMqBh3M5B_E",
  authDomain: "facebook-clone-5e6a8.firebaseapp.com",
  projectId: "facebook-clone-5e6a8",
  storageBucket: "facebook-clone-5e6a8.appspot.com",
  messagingSenderId: "218721296177",
  appId: "1:218721296177:web:8844573d43fb0f8cd59a10",
  measurementId: "G-43PXS48WFN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
