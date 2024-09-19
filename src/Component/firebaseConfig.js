// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo2_W8aQi963fGzAYlsw33_838ZTjTu7w",
    authDomain: "upload-files-d3b42.firebaseapp.com",
    projectId: "upload-files-d3b42",
    storageBucket: "upload-files-d3b42.appspot.com",
    messagingSenderId: "380896334106",
    appId: "1:380896334106:web:b16525dd53e7f27e895ca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);