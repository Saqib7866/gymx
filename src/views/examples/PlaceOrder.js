import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, NavLink } from "reactstrap";
import ReactStripePaymentBtn from "components/ReactStripe/ReactStripePaymentBtn";
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
      <div>
        <h2></h2>
        <Form>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label for="name">{this.state.name}</Label>
                <Input type="name" name="name" id="name" placeholder="Name" />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label for="Email">{this.state.email}</Label>
                <Input
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
              type="text"
              name="address1"
              id="address1"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <Label for="address2">{this.state.address2}</Label>
            <Input
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
                <Input type="text" name="city" id="city" />
              </FormGroup>
            </Col>
            <Col sm={2}>
              <FormGroup>
                <Label for="zip">{this.state.zip}</Label>
                <Input type="text" name="zip" id="zip" />
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
