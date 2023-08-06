import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";


import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import SectionTile from "../../../../Components/SectionTile";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className=" m-20">
      <SectionTile
        heading="Testimonials"
        subHeading="summer camp"
      ></SectionTile>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="mt-4">
              <Rating 
              className=" mx-auto mb-5"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className=" mx-28"> {review.details}</p>
              <h3 className="text-center mt-5 font-semibold text-blue-600 text-2xl">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
