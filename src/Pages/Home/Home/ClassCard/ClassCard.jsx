const ClassCard = ({ popularClass }) => {
  const { image, name, price, instructor, students } = popularClass;
  return (
    <div className="card w-full bg-gray-950 shadow-xl">
      <figure className=" pt-10 ">
        <img src={image} alt="Shoes" className="rounded-xl h-48 w-96" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className=" text-white uppercase font-sans card-title">{name}</h2>
        <h4 className=" text-white  font-sans text-sm card-title">
          Instructor: {instructor}
        </h4>
  
        <p className="text-white "> </p>
        <p className="text-white ">{students} </p>
        

        <div className="card-actions">
          <button className="btn ">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
