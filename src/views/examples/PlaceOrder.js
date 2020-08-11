import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import ReactStripePaymentBtn from "components/ReactStripe/ReactStripePaymentBtn";
import "./placeorder.css";

class PlaceOrder extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      name: "",
      
      address1: "",
      address2: "",
      city: "",
      zip: "",
    };
  
  
  }
  
  handleChange =(e)=> {
  const {name,value} = e.target;
  this.setState({
    [name]: value
  });
}
  render() {
    return (
      <div className="bg mt-5 container d-flex">
        <div className="child">
        <h2 className="text-center"
          style={{
            marginLeft: "20px",
            paddingTop: "20px",
            color: "#b3ffff",
            
          }}
        >
          <strong>Shipping Details</strong>
        </h2>
        <Form>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  style={{
                    marginTop: "5px",
                    marginLeft: "20px",
                    backgroundColor: "rgba(52,52,52,0.1)",
                    border: "2px solid #b3ffff",
                    color: "white ",
                    width: " 500px",
                  }}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
           
            </Col>
          </Row>
          <FormGroup>
            <Label for="address1">Address 1</Label>
            <Input
              style={{
                marginTop: "5px",
                marginLeft: "20px",
                backgroundColor: "rgba(52,52,52,0.1)",
                border: "2px solid #b3ffff",
                color: "white ",
                width: " 500px",
              }}
              type="text"
              name="address1"
              id="address1"
              placeholder="1234 Main St"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="address2">Address 2</Label>
            <Input
              style={{
                marginTop: "5px",
                marginLeft: "20px",
                backgroundColor: "rgba(52,52,52,0.1)",
                border: "2px solid #b3ffff",
                color: "white ",
                width: " 500px",
              }}
              type="text"
              name="address2"
              id="address2"
              placeholder="Apartment, studio, or floor"
              onChange={this.handleChange}
            />
          </FormGroup>
         
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  style={{
                    marginTop: "5px",
                    marginLeft: "20px",
                    backgroundColor: "rgba(52,52,52,0.1)",
                    border: "2px solid #b3ffff",
                    color: "white ",
                    width: " 500px",
                  }}
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  onChange={this.handleChange}
                />
              </FormGroup>
          
          
              <FormGroup>
                <Label for="zip">Zip Code</Label>
                <Input
                  style={{
                    marginTop: "5px",
                    marginLeft: "20px",
                    backgroundColor: "rgba(52,52,52,0.1)",
                    border: "2px solid  #b3ffff",
                    color: "white ",
                    width: " 500px",
                  }}
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="ZIP Code"
                  onChange={this.handleChange}
                />
              </FormGroup>
            
            
          
        </Form>
        <ReactStripePaymentBtn />
        </div>
       
      </div>
    );
  }
}

export default PlaceOrder;
