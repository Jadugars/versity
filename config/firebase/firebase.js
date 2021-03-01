import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

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
    this.db = firebase.firestore();
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

  signInUser = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  handleVerifyEmail = (actionCode) =>
    firebase.auth().applyActionCode(actionCode);

  getCurrentUser = () => firebase.auth().currentUser;

  doesUserExistsInCollection = (userId) => {
    console.log("Does user ", userId, " exist in collection?");
    this.db
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        return doc.exists;
      });
  };

  setupUserInCollection = (user) => {
    console.log(user);
    this.db.collection("users").doc(`${user.uid}`).set({
      name: "New User",
    });
  };
}

export default Firebase;
