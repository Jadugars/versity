import { useFormik } from "formik";
import * as Yup from "yup";
import EventAvatar from "../components/eventAvatar"
import { useRouter } from 'next/router'
function Events(props) {
  const router = useRouter()
  const formik = useFormik({
    initialValues: { EventName: "", },   // add people's list
    validationSchema: Yup.object({
      EventName: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setStatus }) => {
      
    },
  });


  let eventList = [
    ["Akase 2.0", "AKS Anual event"],
    ["I'TEC", "SAC Event"],
    ["General Meeting", "Meeting to discuss students issues"],
    ["I'TEC", "SAC Event"],
    ["General Meeting", "Meeting to discuss students issues"],
    ["I'TEC", "SAC Event"],
    ["General Meeting", "Meeting to discuss students issues"]
  ];
  const list = []
  eventList.forEach(element => {
    list.push(<EventAvatar EventName={element[0]} EventDiscription={element[1]}/>)
  });
  
  

  return (
  <div>
    <div className="min-h-screen items-center justify-center  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" block text-align:center">
      <div className="my-2">
            <label for="group-discription" className="pd-4 font-bold text-lg text-gray-600 flex justify-center">
            Search Events
            </label>
            <input
              id="event-name"
              name="EventName"
              type="string"
              required
              className="flex justify-center mt-2 mx-auto appearance-none rounded-none relative block w-3/12 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Enter Name . . ."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.EventName}
            />
          </div>
          </div>
          <div className="pt-2 container bg-transparent text-4xl font-serif">Events for you</div>
          <div class="pt-6 grid grid-flow-row grid-cols-4 grid-rows-3 gap-10">
            {list}
          </div>
    </div>
  </div>
  );
}

export default Events;
