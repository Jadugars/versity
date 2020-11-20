import firebase from 'firebase';

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
     }
    }
  }
   
  export default Firebase;