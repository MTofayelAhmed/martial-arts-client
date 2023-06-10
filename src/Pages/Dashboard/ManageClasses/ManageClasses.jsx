import SectionTile from "../../../Components/SectionTile";
import useClass from "../../../Hook/useClass";

const ManageClasses = () => {
  const [classes] = useClass();

  return (
    <div>
      <SectionTile
        subHeading="summer camp"
        heading="Admin panel- all Class"
      ></SectionTile>

      <div className="overflow-x-auto mt-14">
        <table className="table ">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Seats</th>
              <th>Price</th>
              <th>status</th>
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
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Cy Ganderton</td>

                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
