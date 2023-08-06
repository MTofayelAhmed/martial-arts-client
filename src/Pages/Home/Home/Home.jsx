
import Testimonial from "./Testimonial/Testimonial";
import Instructor from "../Instructors/Instructor";
import PopularClass from "../PopularClass/PopularClass";
import TopSlider from "../TopSlider/TopSlider";
import BannerSection from "./BannerSection/BannerSection";



const Home = () => {
  

  return (
    <div>
 
    <TopSlider></TopSlider>
    <BannerSection></BannerSection>
    <PopularClass></PopularClass>
   <Instructor></Instructor>
   <Testimonial></Testimonial>
    </div>
  );
};

export default Home;