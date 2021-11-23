import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCRoVf_jAivLEwXvrOsvnJTSf2rLRb6sP0",
    authDomain: "food-blog-posts.firebaseapp.com",
    projectId: "food-blog-posts",
    storageBucket: "food-blog-posts.appspot.com",
    messagingSenderId: "618317336613",
    appId: "1:618317336613:web:1636a000e66ac1c1046fcc",
    measurementId: "G-EPHBTYJQ2E"
  });

const auth = firebase.auth();

export { auth, firebaseApp };