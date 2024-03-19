 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = {

   apiKey: "AIzaSyBKHTzElhImBQVyXDbrslVKGNGXlfdhTAM",

   authDomain: "fir-auth-b9a55.firebaseapp.com",

   projectId: "fir-auth-b9a55",

   storageBucket: "fir-auth-b9a55.appspot.com",

   messagingSenderId: "152631087413",

   appId: "1:152631087413:web:27bdf1184c063d47ff3c7c",

   measurementId: "G-P1CDPX2GJF"

 };


 // Initialize Firebase

 const app = initializeApp(firebaseConfig);

 const analytics = getAnalytics(app);
 var firebase = require('firebase');
 var firebaseui = require('firebaseui');
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ],
    // Other config options...
  });
  
  // Is there an email link sign-in?
if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
  }
  // This can also be done via:
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    ui.start('#firebaseui-auth-container', uiConfig);
  }
  