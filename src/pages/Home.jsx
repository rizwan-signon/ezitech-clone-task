import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/Images/img-3.jpg";
const Home = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${image})` }}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
