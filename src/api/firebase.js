import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWxFeLnSYH1ELFauYD8HyZ_GChbzWidGo",
  authDomain: "alunos-afe3f.firebaseapp.com",
  projectId: "alunos-afe3f",
  storageBucket: "alunos-afe3f.appspot.com",
  messagingSenderId: "63543463681",
  appId: "1:63543463681:web:41f73b772ebacd12a55500",
  measurementId: "G-57LCTCHRH7"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
