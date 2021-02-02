import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";

function CreateGroup(props) {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { groupName: "", groupDiscription: "", people: "" }, // add people's list
    validationSchema: Yup.object({
      groupName: Yup.string()
        .min(4, "Must be 4 characters")
        .max(30, "There should be less than 30 characters")
        .required("Required"),
      groupDiscription: Yup.string()
        .max(100, "There should be less than 100 characters")
        .required("Required"),
      people: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setStatus }) => {
      console.log("running on SUbmit");
      try {
        setStatus(null);
        await props.firebase.createGroup(
          values.groupName,
          values.groupDiscription,
          values.people
        );
      } catch (err) {
        console.error("Error while creating group: ", err);
        console.log(formik.status);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ml-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Groups
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="my-2">
              <label for="group-name" className="font-bold text-gray-600">
                Group Name
              </label>
              <input
                id="groupName"
                name="groupName"
                type="string"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Enter group name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.groupName}
              />
            </div>
            <div className="my-4">
              <label
                for="group-discription"
                className="font-bold text-gray-600"
              >
                Group Discription
              </label>
              <input
                id="groupDiscription"
                name="groupDiscription"
                type="string"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Enter group discription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.groupDiscription}
              />
            </div>

            <div className="my-8">
              <label for="people" className="font-bold text-gray-600">
                Invite People
              </label>
              <input
                id="people"
                name="people"
                type="people"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Enter name to add"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.people}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                + Invite more
              </a>
            </div>
          </div>
          <div className="text-align:center">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;
