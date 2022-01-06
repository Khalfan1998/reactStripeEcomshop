import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

const KEY = "pk_test_51K9luKDHgD7vvY49C8bHgEUCNYjaGuaA0NF9clG1WMRNctR3dINn6HFElfUsoPlgRFGpjnYAiZTAhrKkeIscPKOR00wBTuQuns"

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();


    const onToken = (token) => {
        setStripeToken(token);

    };

    useEffect(()=>{
        const makeRequest = async () => {
            try {
               const res = await axios.post(
                   "http://localhost:5000/api/checkout/payment",
                   {
                       tokenId: stripeToken.id,
                       amount: 3000,
                   }
                   );
                   console.log(res.data)
                   history.push('/success');
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    },[stripeToken]);

    return (
        <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            {stripeToken ? (<span>Processing. Please wait...</span>) :(

            
            <StripeCheckout
            name="Khalfan Shop"
            image="https://i.postimg.cc/pTFsScVB/display2-removebg-preview.png"
            billingAddress
            shippingAddress
            description="Your total is $30"
            amount={3000}
            token={onToken}
            stripeKey= {KEY}
            
            
            >
            <button
            style={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
            }}
              
            >
                Pay Now
            </button>
            </StripeCheckout>
            )}
        </div>
    )
}

export default Pay
