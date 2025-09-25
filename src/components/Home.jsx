import HeroVideo from "../components/HeroVideo";
import IntroductionHome from "./IntroductionHome";
import ServicesHome from "./ServicesHome";
import ConditionsHome from "./ConditionsHome";
import TestimonialsHome from "./TestimonialsHome";
import CalltoAction from "./CalltoAction";

const Home = () => {
  return (
    <div className="font-primary">
      <HeroVideo />
      <IntroductionHome />
      <ServicesHome />
      <ConditionsHome />
      <TestimonialsHome />
      <CalltoAction/>
      
    </div>
  );
};

export default Home;
