import Access from "./access";
import Benefit from "./benefit";
import Hero from "./hero";
import Testimonial from "./testimonial";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Access />
      <Benefit />
      <Testimonial />
    </div>
  );
};

export default Home;
