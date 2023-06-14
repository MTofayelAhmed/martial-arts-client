import  { useState } from 'react';
import Swal from 'sweetalert2';
import SectionTile from '../../../Components/SectionTile';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hook/useAxiosSecure';


const ManageClasses = () => {
const [axiosSecure]= useAxiosSecure()

  const {data: classes=[],  refetch  } = useQuery({
    queryKey: ['classes/admin'],
    queryFn: async () =>{
      const res = await axiosSecure.get("/classes/admin")
      return res.data
      
    }
   
   
  })


  const [disabledIds, setDisabledIds] = useState([]);

  const handleApprove = (singleClass) => {
    if (!disabledIds.includes(singleClass._id)) {
      setDisabledIds([...disabledIds, singleClass._id]);

      fetch(`https://summer-camp-server-mtofayelahmed.vercel.app/classes/approve/${singleClass._id}`, {
        method: 'PATCH',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${singleClass.name} is approved now`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
          // Re-enable the button in case of error
          setDisabledIds(disabledIds.filter((id) => id !== singleClass._id));
        });
    }
  };

  const handleDenied = (singleClass) => {
    if (!disabledIds.includes(singleClass._id)) {
      setDisabledIds([...disabledIds, singleClass._id]);

      fetch(`https://summer-camp-server-mtofayelahmed.vercel.app/classes/deny/${singleClass._id}`, {
        method: 'PATCH',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${singleClass.name} is denied now`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
          // Re-enable the button in case of error
          setDisabledIds(disabledIds.filter((id) => id !== singleClass._id));
        });
    }
  };

  const isIdDisabled = (id) => {
    return disabledIds.includes(id);
  };


  

  return (
    <div>
      <SectionTile subHeading="summer camp" heading="Admin panel - all Class"></SectionTile>

      <div className="overflow-x-auto mt-14">
        <table className="table">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approved</th>
              <th>Denied</th>
              <th>FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{singleClass.name}</td>

                <td>{singleClass.instructor}</td>
                <td>{singleClass.availableSeats}</td>
                <td>$ {singleClass.price}</td>
                <td>{singleClass.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(singleClass)}
                    className="btn btn-sm btn-active btn-ghost"
                    disabled={isIdDisabled(singleClass._id)}
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDenied(singleClass)}
                    className="btn btn-sm btn-active btn-ghost"
                    disabled={isIdDisabled(singleClass._id)}
                  >
                    Deny
                  </button>
                </td>

                <td>
                  <button className="btn btn-sm btn-active btn-ghost">FeedBack</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
