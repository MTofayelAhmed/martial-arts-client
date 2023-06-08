


const AllClassesCard = ({ course }) => {

  const { image, name, instructor, availableSeats, price } = course;


  return (
    <div className={`card lg:card-side ${availableSeats === 0 ? 'bg-red-900 text-white' : 'bg-base-100'}`}>
      <figure>
        <img className="h-[250px] w-[250px]" src={image} alt="Album" />
      </figure>
      <div className="card-body -mt-9 text-center">
        <h2 className="text-2xl font-extrabold">{name}</h2>
        <h2 className="text-gray-400 text-sm">Instructor: {instructor}</h2>
        <h2 className="text-gray-400 text-sm">Available seats: {availableSeats}</h2>
        <h2 className="text-gray-400 text-sm">Course fee: ${price}</h2>

        <div className="card-actions mt-10 justify-center">
      
          <button className="h-9 w-44 btn "
            disabled={availableSeats === 0}
          
          >
            Select class
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;

