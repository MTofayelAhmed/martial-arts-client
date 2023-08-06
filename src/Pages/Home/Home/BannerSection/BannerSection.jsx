
import SectionTile from '../../../../Components/SectionTile';
import { motion } from 'framer-motion';
import banner from '../../../../assets/pexels-skitterphoto-3797.jpg';

const BannerSection = () => {
  const textAnimate = {
    offscreen: { x: -200, opacity: 2 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 15,
      },
    },
  };

  return (
    <div className="mx-4 md:mx-20 mt-4 md:mt-20">
      <div className=' mb-20'>
        <SectionTile heading="Be our poster" subHeading="summer camp"></SectionTile>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-2/5 mb-4 lg:mb-0 lg:mr-4">
          <motion.h2
            variants={textAnimate}
            initial="offscreen"
            animate="onscreen"
            className="text-center uppercase font-serif"
          >
            <span className="text-green-800 text-5xl font-extrabold">Grow</span>
            <span className="text-3xl font-semibold text-gray-500 ml-5">Your</span>
            <br />
            <span className="text-5xl font-bold text-yellow-500">Strength</span>
          </motion.h2>
          <p className="ml-4 lg:ml-20 mt-6 text-gray-500">
            with world-class fighters and achieve extraordinary things in life. It will be a life-changing event.
          </p>
        </div>
        <div className="w-full lg:w-3/5 lg:mt-30 ">
          <img src={banner} alt="Banner Image" className="h-[250px] lg:h-[500px] w-full rounded-xl" />
        </div>
      </section>
    </div>
  );
};

export default BannerSection;

