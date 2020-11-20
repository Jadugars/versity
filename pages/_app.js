import Firebase from '../config/firebase/firebase'
import FirebaseContext from '../config/firebase/context'
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (<FirebaseContext.Provider value={new Firebase()}><Component {...pageProps} /></FirebaseContext.Provider>);
}

export default MyApp;
