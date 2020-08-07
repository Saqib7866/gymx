import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import ReactStripePaymentBtn from "components/ReactStripe/ReactStripePaymentBtn";
import "./placeorder.css";
class PlaceOrder extends Component {
  state = {
    name: "Saqib",
    email: "saqibali@gmail.com",
    address1: "sdsdssdsds",
    address2: "wqwqwqwqwq",
    city: "BWP",
    zip: "6300",
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bg ">
        <h2
          style={{
            marginLeft: "20px",

            color: "aliceblue",
            justifyContent: "center",
          }}
        >
          Personal Infromation
        </h2>
        <Form>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label for="name">{this.state.name}</Label>
                <Input
                  style={{
                    marginLeft: "20px",
                    backgroundColor: "rgba(52,52,52,0.1)",
                    border: "2px solid red",
                    color: "white ",
                    width: " 500px",
                  }}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label for="Email">{this.state.email}</Label>
                <Input
                  style={{
                    backgroundColor: "rgba(52,52,52,0.1)",
                    border: "2px solid red",
                    color: "white ",
                    width: " 500px",
                  }}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="address1">{this.state.address1}</Label>
            <Input
              style={{
                marginLeft: "20px",
                backgroundColor: "rgba(52,52,52,0.1)",
                border: "2px solid red",
                color: "white ",
                width: " 1120px",
              }}
              type="text"
              name="address1"
              id="address1"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <Label for="address2">{this.state.address2}</Label>
            <Input
              style={{
                marginLeft: "20px",
                backgroundColor: "rgba(52,52,52,0.1)",
                border: "2px solid red",
                color: "white ",
                width: " 1120px",
              }}
              type="text"
              name="address2"
              id="address2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label for="city">{this.state.city}</Label>
                <Input
                  style={{
                    marginLeft: "20px",
                    backgroundColor: "rgba(52,52,52,0.1)",
                    border: "2px solid red",
                    color: "white ",
                    width: " 500px",
                  }}
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                />
              </FormGroup>
            </Col>
            <Col sm={2}>
              <FormGroup>
                <Label for="zip">{this.state.zip}</Label>
                <Input
                  style={{
                    backgroundColor: "rgba(52,52,52,0.1)",
                    border: "2px solid red",
                    color: "white ",
                    width: " 500px",
                  }}
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="ZIP Code"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <ReactStripePaymentBtn />
      </div>
    );
  }
}

export default PlaceOrder;
