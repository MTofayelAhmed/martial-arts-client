const ClassCard = ({ popularClass }) => {
  const { image, name, instructor, students } = popularClass;
  return (
    <div className="card w-96 bg-gray-950 shadow-2xl">
      <figure className=" pt-10 ">
        <img src={image} alt="Shoes" className="rounded-xl h-48 w-72" />
      </figure>
      <div className="card-body   text-center">
        <h2 className=" text-white uppercase justify-center font-sans card-title">{name}</h2>
        <h4 className=" text-white  font-sans  justify-center text-lg card-title">
          Instructor: {instructor}
        </h4>
       <div className=" flex  justify-end mt-3 ">
       <p className="text-white "> Enrolled:   {students} </p>
        <p className="text-white "> Remaining seats:   {students} </p>
       </div>
        

       
      </div>
    </div>
  );
};

export default ClassCard;
