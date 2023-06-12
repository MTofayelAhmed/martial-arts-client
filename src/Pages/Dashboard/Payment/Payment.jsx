import { loadStripe } from "@stripe/stripe-js";
import SectionTile from "../../../Components/SectionTile";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// TODO: Provide publishable key

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {
  return (
    <div className="w-full px-28">
        <SectionTile heading="Payment" subHeading="summer camp"></SectionTile>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
     
    </div>
  );
};

export default Payment;
