import { Slide } from "react-awesome-reveal";

const InstructorCard = ({instructor}) => {

  const {image } = instructor
  return (
   <Slide>
     <div className="card card-compact w-96 h-[400px] bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body  ">
      <h2 className="card-title mx-auto">{instructor.instructor}</h2>
      <h5 className=" font-medium text-gray-700 mx-auto">{instructor.title} </h5>
     
      
    </div>
  </div>
   </Slide>
  );
};

export default InstructorCard;