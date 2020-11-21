import FirebaseContext from "../config/firebase/context";
import "../styles/tailwind.css";
import { useContext } from "react";

function MyApp({ Component, pageProps }) {
  const firebase = useContext(FirebaseContext);
  return <Component firebase={firebase} {...pageProps} />;
}

export default MyApp;
