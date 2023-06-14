
import Instructor from "../Instructors/Instructor";
import PopularClass from "../PopularClass/PopularClass";
import TopSlider from "../TopSlider/TopSlider";



const Home = () => {
  

  return (
    <div>
    <TopSlider></TopSlider>
    <PopularClass></PopularClass>
   <Instructor></Instructor>
    </div>
  );
};

export default Home;