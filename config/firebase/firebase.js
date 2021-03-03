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

  createGroup = (groupName, groupDescription) => {
    var user = firebase.auth().currentUser;
    //var database = firebase.database();
    this.db
      .collection("groups")
      .add({
        name: groupName,
        description: groupDescription,
      })
      .then((docRef) => {
        this.db.collection("groups").doc(docRef.id).collection("members").add({
          id: user.uid,
          isAdmin: true,
          name: "Abdullah",
        });
        console.log("Group Created!");
      })
      .catch(function (error) {
        console.error("Error creating group ", error);
      });
  };
}

export default Firebase;
