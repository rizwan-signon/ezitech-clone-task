import { MdFacebook } from "react-icons/md";
const Hero = () => {
  return (
    <div className=" max-w-5xl mx-auto mt-[20px] py-36 flex flex-col space-y-11">
      <h1 className="  text-white max-w-2xl mx-auto text-2xl sm:text-5xl w-full text-center font-bold">
        Learn the fundamentals with our experts in marketing
      </h1>
      <h3 className="hidden sm:block text-white sm:text-2xl sm:text-center">
        utilize effective learning to Reach Your Potentails
      </h3>
      <input
        type="text"
        placeholder="search..."
        className=" hidden sm:block p-5 w-2/4 mx-auto rounded-lg "
      />
      <h2 className="hidden sm:block text-white text-center text-2xl">
        explore our more products
      </h2>
      <div className=" hidden sm:flex items-center gap-8 mx-auto text-white">
        <h1 className="uppercase text-4xl font-bold">EZIBLOGS</h1>
        <h1 className="uppercase text-4xl font-bold">EZIPOS</h1>
        <h1 className="uppercase text-4xl font-bold">EZICODING</h1>
        <div className=" fixed bottom-4 left-3 flex items-center gap-4 mx-10">
          <h1 className="bg-green-500 p-2 rounded-full">
            <MdFacebook className="text-5xl" />
          </h1>
          <h1 className="bg-gray-600 p-3 rounded-lg text-xs">
            need help <span className="font-bold text-xs">contact us</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
