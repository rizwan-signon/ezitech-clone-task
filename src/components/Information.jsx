import image from "../assets/Images/img-4.jpg";
const Information = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-around mt-28">
      <div className="relative w-full sm:w-2/4">
        <img
          src={image}
          alt=""
          className=" w-[300px] h-[500px] object-cover rounded-lg ml-20 mb-16"
        />
        <div className="absolute inset-0 bg-blue-700 rounded-full w-[450px] h-[450px] z-[-1] mt-6"></div>
      </div>
      <div className="w-full sm:w-2/4 flex flex-col gap-6 mt-6">
        <h1 className="text-6xl text-start font-medium">
          Learning <span className="text-blue-700 ">anytime</span> from anywhere
        </h1>
        <p className="text-xl ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quis
          tempore corporis minus, aperiam nostrum nihil consequuntur amet
          asperiores maiores ex ab nemo eum? A numquam similique aut voluptates.
          Rerum!
        </p>
        <div className="flex items-center justify-center gap-6 sm:justify-start">
          <button className="bg-black text-white p-3 rounded-lg">
            Downloud on apple
          </button>
          <button className="bg-black text-white p-3 rounded-lg">
            Downloud on google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
