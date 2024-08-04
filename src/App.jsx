import HowItWorks from "./components/HowItWorks";
import Home from "./pages/Home";
import Courses from "./components/Courses";
import Internship from "./components/Internship";

import Information from "./components/Information";
const App = () => {
  return (
    <div>
      <Home />
      <HowItWorks />
      <Courses />
      <Internship />
      <Information />
    </div>
  );
};

export default App;
