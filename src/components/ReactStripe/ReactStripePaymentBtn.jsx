import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';


function ReactStripePaymentBtn(){
    
    const [totalAmount,settotalAmount] = React.useState(100)
        let price = totalAmount * 100;
     const   Ontoken=(token)=>{
            const data = {token,totalAmount}
            Axios.post('http://localhost:1337/api/payment', data).then(res=>{
                console.log(res)
                alert("Payment Successfuly Paid")
            }).catch(err => console.log(err))
            }

    return(
        <div className="container text-center">
<StripeCheckout 
                stripeKey = "pk_test_51H9UsTBKl3vOnkt9tufSaVTkxodJRQqeXQ5J2pVKyF41Lw4Cx17CFHzH2lZRtVaerBe7QozQ2WBoaDCtcTak2QBj0032MGKeOH"
                token= {Ontoken}
                amount= {price}
                description={`total pay ${totalAmount}`}
                />

        </div>
    );
}

export default ReactStripePaymentBtn