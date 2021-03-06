import { useRouter } from 'next/router'

function EventAvatar(props) {
    const router = useRouter()
  let href = ""
  const CreateGroupClick = (e) => {
    e.preventDefault()
    router.push("/createGroup")
  }
    return (
        <div  className="absolute container mx-auto px-250  bg-green appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm">
        <p className="text-green-600 font-medium text-xl">{props.EventName}</p>
        <p className="pt-1 text-black-500 font-normal text-md">{props.EventDiscription}</p>
        <div className="pt-5">
            <button
              type="submit"
              className="group relative w-full py-1 border border-transparent text-sm font-medium rounded text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              
              </span>
              View Details
            </button>
          </div>

        </div>
    );
  }
  
  export default EventAvatar;
  
  
