import HowItWorks from "./components/HowItWorks";
import Home from "./pages/Home";
import Courses from "./components/Courses";
import Internship from "./components/Internship";

import Information from "./components/Information";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Home />
      <HowItWorks />
      <Courses />
      <Internship />
      <Information />
      <Footer />
    </div>
  );
};

export default App;
