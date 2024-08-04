import { MdFacebook } from "react-icons/md";
import {
  FaPhone,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const HowItWorks = () => {
  return (
    <div>
      <div className=" max-w-6xl mx-auto mt-20">
        <h1 className=" text-center text-4xl text-black font-bold ">
          how it works
        </h1>
        <div className="  max-w-4xl mx-auto flex flex-col gap-6 items-center justify-between mt-16 sm:flex-row ">
          <div className=" h-[200px] w-[250px] text-3xl font-bold bg-gray-600 rounded-2xl text-center just flex items-center justify-center ">
            welcome to ezitech
          </div>
          <div className=" h-[200px] w-[250px] text-3xl font-bold bg-gray-600 rounded-2xl text-center flex items-center justify-center">
            welcome to ezitech
          </div>
          <div className=" h-[200px] w-[250px] text-3xl font-bold bg-gray-600 rounded-2xl text-center flex items-center justify-center">
            welcome to ezitech
          </div>
        </div>
        <div className=" max-w-5xl mx-auto mt-20 grid sm:grid-cols-6 grid-cols-3 gap-10">
          <div className=" h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p className="">
              <MdFacebook className="text-7xl text-amber-950" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className=" h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <FaLinkedin className="text-7xl text-orange-500" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <MdFacebook className="text-7xl" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <FaLinkedin className="text-7xl text-blue-700" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <FaLinkedin className="text-7xl" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <MdFacebook className="text-7xl" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <FaLinkedin className="text-7xl" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <MdFacebook className="text-7xl text-yellow-600" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <FaPhone className="text-7xl" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <FaYoutube className="text-7xl text-red-700" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <FaLinkedin className="text-7xl" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <FaInstagramSquare className="text-7xl text-green-800" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
