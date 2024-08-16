import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import hero from "../assets/Images/hero.jpg";
const Home = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${hero})` }}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
