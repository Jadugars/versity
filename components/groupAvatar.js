function GroupAvatar(props) {

    return (
        <div  className="absolute container mx-auto px-250  bg-green appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm">
        <p className="text-blue-400 text-xl">{props.GroupName}</p>
        <p className="pt-1 text-black-500 text-md">{props.GroupDiscription}</p>
        <div className="pt-5 text-center">
            <button
              type="submit"
              className="group relative w-full py-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              
              </span>
              Unsub
            </button>
          </div>

        </div>
    );
  }
  
  export default GroupAvatar;
  
  
