const ClassCard = ({ popularClass }) => {
  const { image, name, instructor, students } = popularClass;
  return (
    <div className="card w-96 bg-gray-950 shadow-2xl">
      <figure className=" pt-10 ">
        <img src={image} alt="Shoes" className="rounded-xl h-48 w-72" />
      </figure>
      <div className="card-body   text-center">
        <h2 className=" text-gray-400 uppercase justify-center font-sans card-title">{name}</h2>
        <h4 className=" text-gray-300  justify-center text-lg ">
          Instructor: {instructor}
        </h4>
        <h4 className="   font-sans  justify-center text-gray-300 ">
         students: {students}
        </h4>
      
        

       
      </div>
    </div>
  );
};

export default ClassCard;
