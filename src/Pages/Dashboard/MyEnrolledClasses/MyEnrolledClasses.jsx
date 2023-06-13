
import SectionTile from "../../../Components/SectionTile";
import usePayment from "../../../Hook/usePayment";

const MyEnrolledClasses = () => {
 
  const [admitted] = usePayment()

  return (
    <div>
      <SectionTile subHeading="summer-camp" heading="Enrolled Classes"></SectionTile>
      <div className="overflow-x-auto mt-14" >
        <table className="table">
          {/* head */}
          <thead className=" bg-gray-900 text-white">
            <tr>
              <th>#</th>
              <th>ClassName</th>
              <th>Price</th>
        
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {admitted.map((admit, index) => (
              <tr key={admit._id}>
                <th>{index + 1}</th>
                <td>{admit.name}</td>
                <td>{admit.price}</td>
               
                <td>{admit.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
