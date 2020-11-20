import firebase from 'firebase';
import "firebase/auth";

var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDR_ID,
    appId: process.env.APP_ID
  };

  class Firebase {
    constructor() {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
	this.auth=firebase.auth();
	// * Auth API *
	 
	  doCreateUserWithEmailAndPassword = (email, password) =>
	    this.auth.createUserWithEmailAndPassword(email, password);
	 
	  doSignInWithEmailAndPassword = (email, password) =>
	    this.auth.signInWithEmailAndPassword(email, password);
	 
	  doSignOut = () => this.auth.signOut();
	 
	  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
	 
	  doPasswordUpdate = password =>
	    this.auth.currentUser.updatePassword(password);
     }
    }
  }
   
  export default Firebase;
