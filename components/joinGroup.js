import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";

function JoinGroup(props) {
    const router = useRouter();
  const formik = useFormik({
    initialValues: { InviteCode: ""},   // add people's list
    validationSchema: Yup.object({
        InviteCode: Yup.string().required("Required"),
      //Discription: Yup.string().required("Required"),
      //people: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setStatus }) => {
      
    },
  });


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 ml-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Join Groups
          </h2>
        </div>
      <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
        <input type="hidden" name="InviteCode" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="my-2">
            <label for="invite-code" className="font-bold text-gray-600">
            Invite Code
            </label>
            <input
              id="invite-code"
              name="InviteCode"
              type="string"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Enter group invite code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.InviteCode}
            />
          </div>
          
          </div>
          <div className="text-align:center">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                
              </span>
              Join Group
            </button>
          </div>
      </form>
    </div>
  </div>
    );
  }
  
  export default JoinGroup;
  
