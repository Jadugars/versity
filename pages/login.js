import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Footer from "../components/footer.js";

function Login(props) {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setStatus }) => {
      try {
        let userCredentials = await props.firebase.signInUser(
          values.email,
          values.password
        );
        console.log("User Successfully Signed In", userCredentials);
        setStatus(null);

        try {
          let currentUser = await props.firebase.getCurrentUser();
          let userExists = await props.firebase.doesUserExistsInCollection(
            currentUser.uid
          );
          if (userExists) {
            router.push("/calendar");
          } else {
            try {
              await props.firebase.setupUserInCollection(currentUser);
              router.push("/calendar");
            } catch (err) {
              console.error("Error while setting up user in database");
              setStatus(err.message);
            }
          }
        } catch (err) {
          console.error("Error while checking if user exists in database");
          setStatus(err.message);
        }
      } catch (err) {
        console.error("Error while logging in user: ", err);
        setStatus(err.message);
      }
    },
  });

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/dashboard");
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="flex items-center justify-center bg-gray-50 py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign In
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="my-2">
                <label
                  htmlFor="email-address"
                  className="font-bold text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="my-2">
                <label htmlFor="password" className="font-bold text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            {formik.status && (
              <div
                class="bg-red-100 border-t-4 border-red-500 rounded text-red-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div class="flex">
                  <div class="py-1">
                    <svg
                      class="fill-current h-6 w-6 text-red-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold">{formik.status}</p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-green-500 group-hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer className="" />
    </div>
  );
}

export default Login;
