import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import image from "../../../assets/pexels-pixabay-163403.jpg";
import image1 from "../../../assets/pexels-skitterphoto-3797.jpg";
import image2 from "../../../assets/portrait-professional-sportsman-training-practising-karate-isolated-black-studio-background (1).jpg";
import image3 from "../../../assets/two-professional-boxer-boxing-black-smoky-background.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const TopSlider = () => {
  return (
    <AutoplaySlider
    play={true}
    animation="foldOutAnimation"
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={image} />
    <div data-src={image1} />
    <div data-src={image3} />
    <div data-src={image2} />
  </AutoplaySlider>
  );
};

export default TopSlider;
