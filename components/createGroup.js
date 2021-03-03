import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";

function CreateGroup(props) {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { GroupName: "", Groupdescription: "", people: "" }, // add people's list
    validationSchema: Yup.object({
      GroupName: Yup.string().required("Required"),
      Groupdescription: Yup.string().required("Required"),
      people: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setStatus }) => {
      console.log("running on submit");
      try {
        let groupCredentials = await props.fb.firebase.createGroup(
          values.GroupName,
          values.Groupdescription
        );
        console.log("Group Created", groupCredentials);
        setStatus(null);
      } catch (err) {
        console.error("Error while creating Group: ", err);
        setStatus("Server issues");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
                id="group-name"
                name="GroupName"
                type="string"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Enter group name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.GroupName}
              />
            </div>
            <div className="my-4">
              <label
                for="group-description"
                className="font-bold text-gray-600"
              >
                Group description
              </label>
              <input
                id="group-description"
                name="Groupdescription"
                type="string"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Enter group description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Groupdescription}
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
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;
