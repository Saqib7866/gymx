import React, { Component } from "react";
import "./bmr.css";
import { Button, Input, FormGroup, Label, Row, Col } from "reactstrap";
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
      <div className="card shadow container font-weight-bold">
        <h3>My BMI</h3>
        <h4>Enter info to find your BMI</h4>

        <FormGroup>
          <Label for="weightBmi">Weight</Label>
          <Input type="number" id="weightBmi" value={this.state.title} />
        </FormGroup>

        <Row>
          <Col>
            <FormGroup>
              <Label for="heightFtBmi">Height feet</Label>
              <Input type="number" id="heightFtBmi" value={this.state.title} />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="heightInBmi">Height inches</Label>
              <Input type="number" id="heightInBmi" value={this.state.title} />
            </FormGroup>
          </Col>
        </Row>

        <Button
          color="success"
          onClick={this.calculateBmi}
          className="btn btn-primary mb-3"
        >
          <strong> Calculate</strong>
        </Button>

        {this.state.bmi > 0 && (
          <div className="h5">
            Your Bmi is{" "}
            <span className="font-weight-bold">{this.state.bmi}</span> and body
            type is{" "}
            <span className="font-weight-bold">{this.state.bodytype}</span>
          </div>
        )}
      </div>
    );
  }
}

export default MyBMI;
