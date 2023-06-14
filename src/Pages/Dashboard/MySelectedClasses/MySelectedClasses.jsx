import Swal from "sweetalert2";
import SectionTile from "../../../Components/SectionTile";
import useClassCart from "../../../Hook/useClassCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const [cart, , refetch] = useClassCart();
  console.log("my selected classes", cart);

  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (course) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${course._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your course has been deleted.", "success");
          }
        });

        // fetch(`https://summer-camp-server-mtofayelahmed.vercel.app/carts/${course._id}`, {
        //   method: "DELETE",
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //   if (data.deletedCount > 0) {
        //     refetch()
        //     Swal.fire("Deleted!", "Your course has been deleted.", "success");
        //   }

        // });
      }
    });
  };
  return (
    <div>
      <SectionTile
        heading="my selected classes"
        subHeading="summer camp"
      ></SectionTile>
      <div className="overflow-x-auto mt-20">
        <table className="table table-zebra">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((course, index) => (
              <tr key={course._id}>
                <th>{index + 1}</th>
                <td>{course.name}</td>
                <td>{course.instructor}</td>
                <td>{course.email}</td>
                <td>{course.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(course)}
                    className=" btn btn-sm bg-red-700 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
               
                  <Link to="/dashboard/payment"
                  state={{ course }}

                  > 
                  <button className="btn  btn-sm">Pay</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
