import { useRouter } from "next/router";
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const signupClick = (e) => {
    e.preventDefault();
    router.push("/signup");
  };
  const loginClick = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="md:flex bg-white h-screen rounded-lg p-24 justify-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img src="/mainPageVector.png" alt="Versity App Vector" className="object-cover object-center rounded"></img>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is Versity?
    {/* <br className="hidden lg:inline-block"></br>readymade gluten */}
          </h1>
          <p className="mb-8 leading-relaxed">We believes that a socio-productivity app focused on university students will be something that millions of people can use. Versity app will assist students in the academic aspect of university by being their personal scheduler and helping them revise their syllabus. It will also help with the social aspect of university by helping students be an active part of societies/clubs at their university.</p>
          <div className="flex justify-center">
            <a href="/signup" onClick={signupClick} className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 cursor-pointer rounded text-lg">Sign Up</a>
            <a href="/login" onClick={loginClick} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 cursor-pointer rounded text-lg">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}
