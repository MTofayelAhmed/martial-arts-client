import { useQuery } from "@tanstack/react-query";
import SectionTile from "../../../Components/SectionTile";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const ManageUsers = () => {
  const [disabledButtons, setDisabledButtons] = useState([]);

  useEffect(() => {
    const disabledUserIds = localStorage.getItem("disabledUserIds");
    if (disabledUserIds) {
      setDisabledButtons(JSON.parse(disabledUserIds));
    }
  }, []);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    }
  });

  const handleInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const updatedDisabledButtons = [...disabledButtons, user._id];
          setDisabledButtons(updatedDisabledButtons);
          localStorage.setItem(
            "disabledUserIds",
            JSON.stringify(updatedDisabledButtons)
          );
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an instructor now`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      });
  };

  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const updatedDisabledButtons = [...disabledButtons, user._id];
          setDisabledButtons(updatedDisabledButtons);
          localStorage.setItem(
            "disabledUserIds",
            JSON.stringify(updatedDisabledButtons)
          );
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      });
  };

  return (
    <div className="-mt-44">
      <SectionTile heading="Admin Panel" subHeading="summer camp"></SectionTile>
      <div className="overflow-x-auto mt-14">
        <table className="table">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleInstructor(user)}
                    disabled={disabledButtons.includes(user._id)}
                    className="btn btn-active btn-ghost"
                  >
                    Make Instructor
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleAdmin(user)}
                    disabled={disabledButtons.includes(user._id)}
                    className="btn btn-active btn-ghost"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
