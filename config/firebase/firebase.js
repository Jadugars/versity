import firebase from "firebase";
import "firebase/auth";
import { list } from "postcss";

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
    // Initialize document
    this.db
      .collection("groups")
      .add({
        name: groupName,
        description: groupDescription,
      })
      .then((docRef) => {
        this.db
          .collection("groups")
          .doc(docRef.id)
          .collection("members")
          .add({
            admin: {
              id: user.uid,
              name: user.displayName,
            },
          });

        var groupRef = this.db.collection("userGroups").doc(user.uid);
        groupRef.get().then((doc) => {
          if (doc.exists) {
            groupRef.update({
              groups: firebase.firestore.FieldValue.arrayUnion({
                groupId: docRef.id,
                groupName: groupName,
                groupDescription: groupDescription,
              }),
            });
          } else {
            groupRef.set({
              groups: [
                {
                  groupId: docRef,
                  groupName: groupName,
                  groupDescription: groupDescription,
                },
              ],
            });
          }
        });
      })
      .catch(function (error) {
        console.error("Error creating group: ", error);
      });
    /*
try {
  await this.db.runTransaction(async (t) => {
    const doc = await t.get(cityRef);

    // Add one person to the city population.
    // Note: this could be done without a transaction
    //       by updating the population using FieldValue.increment()
    const newPopulation = doc.data().population + 1;
    t.update(cityRef, {population: newPopulation});
  });

  console.log('Transaction success!');
} catch (e) {
  console.log('Transaction failure:', e);
}

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
      });*/
  };

  viewUserGroups = () => {
    var user = firebase.auth().currentUser;
    //var database = firebase.database();
    const groupList = [];
    this.db
      .collection("userGroups")
      .doc("PZBM3oFv0MVMgzEMCnakFgB0f5v2")
      .get()
      .then((doc) => {
        if (doc.exists) {
          //console.log(doc.id, doc.data(), doc.data.length);
          // return doc.data().json();

          doc.data().groups.forEach((element) => {
            groupList.push({
              id: element.groupId,
              name: element.groupName,
              description: element.groupDescription,
            });
          });
          console.log("groups Found: ", groupList);
        } else {
          console.log("no group joined");
        }
      })
      .catch(function (error) {
        console.error("Error viewing group ", error);
      });

    return groupList;
  };
  /*createGroup = (groupName, groupDescription) => {
    var user = firebase.auth().currentUser;
    // Get a new write batch
    var batch = this.db.batch();

    // Set the value of 'NYC'
    //var nycRef = db.collection("groups");
    this.db.batch
      .collection("groups")
      .add({
        name: groupName,
        description: groupDescription,
      })
      .then((docRef) => {
        this.db.collection("groups").docs(docRef.id).collection("members").add({
          id: user.uid,
          isAdmin: true,
          name: "Abdullah Saleem",
        });
      });

    // Update the population of 'SF'
    var sfRef = this.db.collection("users").doc(user.uid);
    batch.update(sfRef, {
      groups: firestore.FieldValue.arrayUnion(docRef.id),
    });

    // Commit the batch
    batch.commit().then(() => {
      console.log("Group Created!");
    });
  };
  */
}

export default Firebase;
