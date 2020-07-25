import React, { Component } from "react";
import "./bmr.css";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
class MyBMI extends Component {
  state = {
    bmi: 0,
    bodytype: "",
  };

  calculateBmi = () => {
    let weight = parseInt(document.getElementById("weightBmi").value);
    let ft = parseInt(document.getElementById("heightFtBmi").value);
    let inch = parseInt(document.getElementById("heightInBmi").value);
    let height = ft * 12 + inch;
    weight = weight * 0.453592;
    let myBmi = ((weight * 703) / (height * height)).toFixed(2);
    this.setState({ bmi: myBmi });
    if (myBmi < 18.5) {
      this.setState({ bodytype: "Underweight" });
    }
    if (myBmi >= 18.5 && myBmi < 24.9) {
      this.setState({ bodytype: "Normal Weight" });
    }
    if (myBmi >= 24.9 && myBmi < 29.9) {
      this.setState({ bodytype: "Overweight" });
    }
    if (myBmi >= 29.9) {
      this.setState({ bodytype: "Obese" });
    }
    if (!(myBmi > 0)) {
      this.setState({ bmi: 0 });
    }
  };
  render() {
    return (
      <div className="container mt-7">
        <div className=" Box myBox">
          <div className=" container boxMragin ">
            <h3 style={{ margin: "3px" }}>
              <strong>My BMI</strong>
            </h3>
            <h4>
              <strong style={{ margin: "3px" }}>
                Enter info to find your BMI
              </strong>
            </h4>
            <h5>
              <strong style={{ margin: "3px" }}>Weight:</strong>
              <Input
                style={{ width: "250px" }}
                className="ml-3"
                id="weightBmi"
                value={this.state.title}
                size="10"
              ></Input>
            </h5>
            <h5>
              <strong style={{ margin: "3px" }}>Height:</strong>
              <br></br>
              <strong style={{ margin: "3px" }}> Ft:</strong>
              <Input
                style={{ width: "250px" }}
                className="space ml-3 mr-3"
                id="heightFtBmi"
                value={this.state.title}
                size="2"
              />
              <strong style={{ margin: "3px" }}>in:</strong>
              <Input
                style={{ width: "250px" }}
                className="space ml-3"
                id="heightInBmi"
                value={this.state.title}
                size="2"
              />
            </h5>
            <Button
              color="success"
              style={{ margin: "9px", fontsize: "20", marginLeft: "13px" }}
              onClick={this.calculateBmi}
              className="btn btn-primary"
            >
              <strong> Calculate</strong>
            </Button>
            <h6 style={{ margin: "9px" }}>
              <strong>
                Your BMI is {this.state.bmi} and body your body type is{" "}
                {this.state.bodytype}
              </strong>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBMI;
