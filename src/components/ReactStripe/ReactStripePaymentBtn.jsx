import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';
import { Component } from 'react';
import AppContext from "../../Context/AppContext";

class ReactStripePaymentBtn extends Component{
    static contextType = AppContext;
   constructor(props){
       super(props);
       this.state={

       }
   }
   Ontoken=(token)=>{
    const amount = this.context.totalAmount;
    console.log(this.context.totalAmount);
    console.log(amount)
       const data = {token,amount}
       Axios.post('http://localhost:1337/api/payment', data).then(res=>{
           console.log(res)
           alert("Payment Successfuly Paid")
       }).catch(err => console.log(err))
       }
   render(){
        // const [totalAmount,settotalAmount] = React.useState(100)
        let price = this.context.totalAmount * 100;
     

    return(
        <div className="container text-center">
<StripeCheckout className="mt-5  mb-5" style={{width:"200px"  }}
                stripeKey = "pk_test_51H9UsTBKl3vOnkt9tufSaVTkxodJRQqeXQ5J2pVKyF41Lw4Cx17CFHzH2lZRtVaerBe7QozQ2WBoaDCtcTak2QBj0032MGKeOH"
                token= {this.Ontoken}
                amount= {price}
                description={`Total Pay ${this.context.totalAmount}$`}
                />

        </div>
    );
   }
   
   
}

export default ReactStripePaymentBtn