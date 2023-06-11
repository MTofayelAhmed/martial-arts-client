import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import {useNavigate, useLocation} from 'react-router-dom'


const AllClassesCard = ({ course }) => {
const {user}= useContext(AuthContext)
const navigate = useNavigate()   
const location= useLocation() 
  const { image, name, instructor, availableSeats, price, _id } = course;

  
const handleClassCart= ()=> {
  if(user && user.email){
    const classCartInfo = {classId: _id,  instructor, name, price, email: user.email}
fetch('http://localhost:5000/carts',{
  method: "POST",
  headers: { 
    "content-type": "application/json"
  },
  body: JSON.stringify(classCartInfo)


})
.then(res=> res.json())
.then(data=> {
  
  
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This course has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(data)
  
})
  }
  else{
    Swal.fire({
      title: 'Please Login to add classes',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login please!'
    }).then((result) => {
      if (result.isConfirmed) {
      navigate('/login',{ state: {from: location}})
      }
    })
  }
}

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
          onClick={handleClassCart}
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

