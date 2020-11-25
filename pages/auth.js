import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  console.log(context);
  let query = context.query;

  return {
    props: { query }, // will be passed to the page component as props
  };
}

function Auth(props) {
  let { mode, oobCode, apiKey, lang } = props.query;
  const router = useRouter();
  switch (mode) {
    case "verifyEmail":
      // Display email verification handler and UI.
      props.firebase
        .handleVerifyEmail(oobCode)
        .then((response) => {
          console.log("Email verified successfully ", response);
          router.push("/emailVerified");
        })
        .catch((err) => {
          console.error("Error verifying email: ", err);
        });
      break;
    default:
    // Error: invalid mode.
  }

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/emailVerified");
  }, []);

  return <p>Utaad AAgya</p>;
}

export default Auth;

