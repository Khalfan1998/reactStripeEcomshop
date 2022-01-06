import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51K9luKDHgD7vvY49C8bHgEUCNYjaGuaA0NF9clG1WMRNctR3dINn6HFElfUsoPlgRFGpjnYAiZTAhrKkeIscPKOR00wBTuQuns"

const Pay = () => {

    const onToken = (token) => {
        console.log(token)

    }

    return (
        <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
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
        </div>
    )
}

export default Pay
