import { loadStripe } from "@stripe/stripe-js";
import SectionTile from "../../../Components/SectionTile";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useParams } from "react-router-dom";



// TODO: Provide publishable key

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {
  const {price}= useParams()
  console.log("price",price)


  return (
    <div className="w-full px-28">
        <SectionTile heading="Payment" subHeading="summer camp"></SectionTile>
        <Elements stripe={stripePromise}>
          <CheckOutForm price={price}></CheckOutForm>
        </Elements>
     
    </div>
  );
};

export default Payment;
