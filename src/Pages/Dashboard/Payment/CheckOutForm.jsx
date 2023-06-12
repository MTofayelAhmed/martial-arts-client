import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";


const CheckOutForm = ({price}) => {
const stripe = useStripe()
const elements = useElements()
const {user}= useContext(AuthContext) 
const [cardError, setCardError]= useState('')
const[axiosSecure] = useAxiosSecure()
const [clientSecret, setClientSecret] = useState("");

useEffect(()=> {
  console.log('price in useEffect', price)
axiosSecure.post('/create-payment-intent', {price})
.then(res=> {
 setClientSecret(res.data.clientSecret)
})

},[])



const handleSubmit = async (event)=> {
  event.preventDefault()
  if(!stripe || !elements){
    return
  }

  const card = elements.getElement(CardElement)
  if(card == null){
    return 
  }
  console.log("card", card)
  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card,
  });
  if (error) {
    console.log('[error]', error);
    setCardError(error.message)
  } else {
    setCardError('')
    console.log('[PaymentMethod]', paymentMethod);
  }

  const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous"

        },
      },
    },
  );
  if(confirmError){
    console.log(confirmError)
  }

  console.log(paymentIntent)


}

  return (
  <>
  
  <form className=" w-full" onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button  className="btn btn-xs mt-5" type="submit" disabled={!stripe || !clientSecret}>
      Pay
    </button>
  </form>

  {cardError && <p className=" text-red-700">{cardError}</p>}
  
  </>
  );
};

export default CheckOutForm;