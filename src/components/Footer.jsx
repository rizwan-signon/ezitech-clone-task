import macBook from "../assets/Images/macbook.png";
import image from "../assets/Images/wallpaper.jpg";
import logo from "../assets/Images/hero.jpg";
import {
  FaPhone,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="text-white" style={{ backgroundImage: `url(${logo})` }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="max-w-3xl mx-auto text-center text-5xl font-bold py-10">
            its time to <span className=" text-blue-700">start</span> investing
            on Yourself
          </h1>
          <img src={macBook} alt="" className="rounded-lg w-full" />
        </div>
        <div className=" grid sm:grid-cols-3 grid-cols-1 gap-20 mt-20 max-w-6xl mx-auto">
          <div>
            <h1 className="uppercase text-4xl  font-bold text-center sm:text-start text-white">
              about
            </h1>
            <p className="text-xl font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              itaque expedita ullam earum at hic voluptate voluptas consectetur,
              sequi eveniet facilis consequuntur eos nobis dolorem? Libero eum
              ipsa tenetur corrupti provident architecto tempora atque nihil
              omnis, facere
            </p>
          </div>
          <div className=" flex flex-col gap-10 grid-cols-subgrid">
            <h1 className="text-white text-center sm:text-start uppercase text-4xl font-bold truncate">
              pupolar courses
            </h1>
            <div className="flex items-center gap-2">
              <img src={image} alt="hello" className="h-16 w-[180px]" />
              <div>
                <h1 className=" tet-white text-xl font-medium hover:opacity-20 cursor-pointer">
                  online arbitarge master miind 2.0
                </h1>
                <p className="">by hamza khan</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={macBook} alt="hello" className="h-16 w-[180px]" />
              <div>
                <h1 className=" text-white text-xl font-medium hover:opacity-20 cursor-pointer">
                  online arbitarge master miind 2.0
                </h1>
                <p className="">by hamza khan</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white text-4xl font-bold uppercase text-center sm:text-start">
              Blogs
            </h1>
            <ul className=" list-disc text-white">
              <li>Blog </li>
              <li>ezitech</li>
              <li>our services </li>
              <li>internships</li>
              <li>location</li>
            </ul>
          </div>
        </div>
        <div className="py-10">
          <h1 className="text-center text-white mt-10">
            Copyright © 2024 Ezitech Institute | Design & Develop by Eziline
            Software House
          </h1>
          <div className="flex items-center justify-end text-white gap-6 mt-4">
            <FaPhone />
            <FaInstagramSquare />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
