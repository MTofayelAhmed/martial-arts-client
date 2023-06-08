

const InstructorCard = ({instructor}) => {

  const {image, } = instructor
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body  ">
      <h2 className="card-title mx-auto">{instructor.instructor}</h2>
     
      
    </div>
  </div>
  );
};

export default InstructorCard;