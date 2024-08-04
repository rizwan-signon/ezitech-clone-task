import logo from "../assets/Images/wallpaper.jpg";
import image from "../assets/Images/img-3.jpg";
const Courses = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className=" text-center text-3xl sm:text-5xl font-medium mt-10">
        Limited Time summer courses
      </h1>
      <p className="text-center mb-16 mt-4">
        all these bundles have recorded leactures
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="w-full sm:w-2/4 p-1">
          <div className="bg-blue-700 h-[120px] py-2">
            <h1 className="text-2xl text-center text-white mb-6">
              web dev courses with industrail projects
            </h1>
            <p className="text-xs text-center text-white">4 courses</p>
          </div>
          <div>
            <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
              <img
                src={logo}
                alt="not found"
                className="h-20 w-32 rounded-lg"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consectetur ut id.
              </p>
              <p>price: 1300pkr</p>
            </div>
            <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
              <img src={image} alt="" className="h-20 w-32 rounded-lg" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consectetur ut id.
              </p>
              <p>price: 1300pkr</p>
            </div>
            <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
              <img
                src={logo}
                alt="not found"
                className="h-20 w-32 rounded-lg"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consectetur ut id.
              </p>
              <p>price: 1300pkr</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/4">
          <div className="bg-blue-700 h-[120px] py-3">
            <h1 className="text-2xl text-center  text-white mb-6">
              web dev courses with industrail projects
            </h1>
            <p className="text-xs text-center text-white">4 courses</p>
          </div>
          <div>
            <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
              <img
                src={logo}
                alt="not found"
                className="h-20 w-32 rounded-lg"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consectetur ut id.
              </p>
              <p>price: 1300pkr</p>
            </div>
            <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
              <img src={image} alt="" className="h-20 w-32 rounded-lg" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consectetur ut id.
              </p>
              <p>price: 1300pkr</p>
            </div>
            <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
              <img
                src={logo}
                alt="not found"
                className="h-20 w-32 rounded-lg"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consectetur ut id.
              </p>
              <p>price: 1300pkr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
