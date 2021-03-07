import { useState } from 'react';

function Settings() {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  return(
      <div className="bg-gray-200 min-h-screen pt-2 ">
        <div className="container mx-auto">
            <div className="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 className="text-2xl font-extrabold text-gray-900">Account Setting</h2>
                <form className="mt-6 border-t border-gray-400 pt-4">
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-full px-3 mb-6'>
                            <label className='block tracking-wide text-gray-600 font-bold mb-2' for='grid-text-1'>Email Address</label>
                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Email'  required></input>
			</div>
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block tracking-wide text-gray-600  font-bold mb-2' for='grid-text-2' >Name</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-2' type='text' placeholder='Name' required></input>
                                </div>
                            </div>
          <div className="text-align:center">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
             Update Info 
            </button>
          </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Settings;

