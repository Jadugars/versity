import firebase from "firebase";
import "firebase/auth";

var config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  createUser = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  verifyUser = (userCredential) => {
    userCredential.user
      .sendEmailVerification()
      .then(function () {
        console.log("Verification Email sent");
      })
      .catch(function (error) {
        console.error("Error sending verification email: ", error);
      });
  };
}

export default Firebase;
