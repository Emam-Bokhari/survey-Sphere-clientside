// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeEDpf3ZVitvVzyMPUkuJ7_NqShDxeKlY",
  authDomain: "surveyspehere.firebaseapp.com",
  projectId: "surveyspehere",
  storageBucket: "surveyspehere.appspot.com",
  messagingSenderId: "637939325111",
  appId: "1:637939325111:web:beabaf95a1f50f1bfdd532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth