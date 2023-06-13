import SectionTile from "../../../Components/SectionTile";
import usePayment from "../../../Hook/usePayment";


const PaymentHistory = () => {
const [admitted] = usePayment()




  return (
    <div>
      <SectionTile heading='Payment History' subHeading='summer camp'> </SectionTile>
      <div className="overflow-x-auto mt-14">
  <table className="table">

    <thead className=" bg-gray-900 text-white">
      <tr>
        <th>#</th>
        <th>ClassName </th>
        <th>TransactionId</th>
        <th>ClassId</th>
        <th>Payment Date</th>
        <th>PaidAmount</th>
      </tr>
    </thead>
    <tbody>
   {
    admitted.map((payment, index)=>  <tr key = {payment._id}>
    <th>{index + 1}</th>
    <td>{payment.name}</td>
    <td>{payment.transactionId}</td>
    <td>{payment.classId}</td>
    <td>{payment.date}</td>
    <td>{payment.price}</td>
  </tr>
  )
   }
      
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default PaymentHistory;