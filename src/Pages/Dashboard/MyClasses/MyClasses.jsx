import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
const [axiosSecure] = useAxiosSecure()
  const { data: instructorClasses = [] } = useQuery({
    queryKey: ["instructorClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/instructorClasses?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Course name</th>
            <th>status</th>
            <th>Total Enrolled</th>
            <th>update</th>
            <th>FeedBack</th>
          </tr>
        </thead>
        <tbody>
          {instructorClasses.map((instructorClass, index) => (
            <tr key={instructorClass._id} className="bg-base-200">
              <th>{index + 1}</th>
              <td>{instructorClass.name}</td>
              <td>{instructorClass.status}</td>
              <td>enrolled number</td>
              <td>
                <button className="btn btn-sm btn-active btn-ghost">
                  update
                </button>
              </td>
              <td>
                <button className="btn btn-sm btn-active btn-ghost">
                  FeedBack
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
