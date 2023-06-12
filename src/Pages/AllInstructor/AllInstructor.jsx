import SectionTile from "../../Components/SectionTile";
import useInstructors from "../../Hook/useInstructors";

const AllInstructor = () => {
  const [instructors] = useInstructors();

  return (
    <div className="mx-20 px-20 my-20">
      <SectionTile heading="all instructors" subHeading="summer camp"></SectionTile>
      <div className="overflow-x-auto my-14">
        <table className="table">
          <thead>
            <tr className=" text-white bg-gray-900">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>ClassName</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((AllInstructor, index) => (
              <tr key={AllInstructor._id}>
                <th>
                  <label>
                 {index + 1}
                  </label>
                </th>

                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-24 h-24">
                        <img
                          src={AllInstructor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{AllInstructor.instructor}</td>
                <td>{AllInstructor.email} </td>
                <td className="font-bold">{AllInstructor.classname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllInstructor;
