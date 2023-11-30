import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {

    return (
        <div className="border-2 border-[#eeeeee] p-6" >
            <Elements stripe={stripePromise} >
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;