import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import image from "../../../assets/pexels-pixabay-163403.jpg";
import image1 from "../../../assets/pexels-skitterphoto-3797.jpg";
import image2 from "../../../assets/portrait-professional-sportsman-training-practising-karate-isolated-black-studio-background (1).jpg";
import image3 from "../../../assets/two-professional-boxer-boxing-black-smoky-background.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const TopSlider = () => {
  return (
   <div className='mb-10'>
     <AutoplaySlider
    play={true}
    style={{ height: '700px' }}
    animation="cubeAnimation"
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div  data-src={image} />
    <div  data-src={image1} />
    <div data-src={image3} />
    <div data-src={image2} />
  </AutoplaySlider>
   </div>

  );
};

export default TopSlider;
