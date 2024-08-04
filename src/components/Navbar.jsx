import { RiAlarmFill } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";
import {
  FaPhone,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow((show) => !show);
  };
  return (
    <header className=" relative flex flex-col">
      <section className=" bg-blue-600">
        <nav className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row gap-4 items-center justify-between sm:px-2 sm:py-2">
          <ul className=" flex flex-col items-end gap-0 sm:text-xs sm:flex-row sm:items-center sm:gap-8 ml-20">
            <div className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <p className="text-white">+92 3455555396</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-white" />
              <p className="text-white">
                Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
              </p>
            </div>
            <div className="flex items-center gap-2">
              <RiAlarmFill className="text-white" />
              <p className="text-white"> Mon - Fri 8.00 - 20.00</p>
            </div>
          </ul>

          <div className="flex items-center gap-6 ml-48 sm:ml-2">
            <div className=" flex items-center gap-4">
              <MdFacebook className="text-white" />
              <FaLinkedin className="text-white" />
              <FaYoutube className="text-white" />
              <FaInstagramSquare className="text-white" />
            </div>

            <div className=" flex items-center">
              <button className="text-white">login</button>
              <p className="text-gray-400 mx-2">|</p>
              <button className="text-white">register</button>
            </div>
          </div>
        </nav>
      </section>
      <div className=" border-gray-500 border-b-2">
        <section className=" flex items-center justify-between max-w-6xl mx-auto py-2 bg-transparent relative">
          <div className="flex flex-col text-white text-3xl">
            <h1 className=" font-bold leading-none">EZITECH</h1>
            <h1>INSTITUTE</h1>
          </div>
          {show ? (
            <GiHamburgerMenu
              onClick={handleShow}
              className="text-white text-4xl"
            />
          ) : (
            <>
              <ul
                className={`${
                  show
                    ? `absolute mt-10 mr-10 rounded-lg`
                    : "flex items-center gap-6 text-white uppercase"
                }`}
              >
                <li>Home</li>
                <li>AboutUs</li>
                <li>Certification</li>
                <li>Careers</li>
                <li>Seminars</li>
                <li>Tech Blogs</li>
                <li>IPORTAL LOGIN</li>
              </ul>
              <div className="flex items-center gap-6 text-white">
                <p>|</p>
                <CiHeart className="font-bold" />
                <button className=" border border-white py-2 px-2">
                  <CiSearch />
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </header>
  );
};

export default Navbar;
