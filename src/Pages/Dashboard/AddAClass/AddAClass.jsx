import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import SectionTile from "../../../Components/SectionTile";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
const [axiosSecure] = useAxiosSecure()
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const instructor = form.instructor.value;

    const email = form.email.value;
    const seats = form.seats.value;
    const price = form.price.value;
    const formData = { name, image, instructor, email, availableSeats: parseFloat(seats), price: parseFloat(price), status: "pending" };

   axiosSecure.post("/classes", formData)
   
    .then(res=> {
      if(res.data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset()
      }
    })


  };

  return (
    <div className="mt-10">
      <SectionTile heading="add a class" subHeading="summer camp"></SectionTile>

      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Class Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            defaultValue={user?.displayName}
            name="instructor"
            type="text"
            placeholder="Instructor Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            defaultValue={user.email}
            type="text"
            name="email"
            placeholder="Instructor Email"
            className="input input-bordered"
          />
        </div>
        <div className=" flex ">
          <div className="form-control mr-5">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              name="seats"
              type="text"
              placeholder="Available Seats"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn " type="submit" value="Add A Class" />
        </div>
      </form>
    </div>
  );
};

export default AddAClass;
