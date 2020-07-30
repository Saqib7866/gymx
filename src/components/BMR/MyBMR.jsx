import React, { Component } from "react";

import LoseWeight from "./LoseWeight";
import DietTable from "./DietTable";
import "./bmr.css";
import { Button, Input, FormGroup, Label, Row, Col } from "reactstrap";
class MyBMR extends Component {
  state = {
    bmr: 0,
    lose: 0,
    gain: 0,
    // TO get table
    fats: 0,
    carbs: 0,
    protiens: 0,
    //Column Values
    chicken: 0,
    olive: 0,
    rice: 0,
    egg: 0,
    opened: false,
    opened1: false,
  };

  calculateBmr = () => {
    let weight = parseInt(document.getElementById("weight").value);
    let ft = parseInt(document.getElementById("heightFt").value);
    let inch = parseInt(document.getElementById("heightIn").value);
    let height = ft * 12 + inch;
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;

    if (gender === "Male") {
      if (weight > 0 && height > 0 && age > 0) {
        let final_bmr = Math.round(
          66.47 + 13.75 * weight + 5.003 * height - 6.755 * age
        );
        console.log(final_bmr);
        if (final_bmr > 0) {
          this.setState({
            bmr: final_bmr,
            gain: final_bmr + 500,
            lose: final_bmr - 500,
          });
        } else {
          this.setState({ bmr: 0 });
        }
      } else {
        alert("Age , Weight  and Height must be greater than 0");
      }
    } else {
      if (weight > 0 && height > 0 && age > 0) {
        let final_bmr = Math.round(
          665 + 4.35 * weight + 4.7 * height - 4.7 * age
        );
        if (final_bmr > 0) {
          this.setState({
            bmr: final_bmr,
            gain: final_bmr + 500,
            lose: final_bmr - 500,
          });
        } else {
          this.setState({ bmr: 0 });
        }
      } else {
        alert("Age , Weight  and Height must be greater than 0");
      }
    }
  };

  loseWeight = () => {
    const { opened } = this.state;

    if (this.state.bmr < 0 || this.state.bmr === 0) {
      this.setState({ lose: 0 });
    } else {
      this.setState({ lose: this.state.bmr - 500 });
      var gainValue = this.state.lose;
      var fatsValue = Math.round((0.2 * gainValue) / 9);
      var carbsValue = Math.round((0.3 * gainValue) / 4);
      var protiensValue = Math.round((0.5 * gainValue) / 4);
      var chickenProtien = Math.round((protiensValue * 80) / 100);
      var EggProtien = Math.round((protiensValue * 20) / 100);
      var chickenValue = Math.round((chickenProtien / 26) * 100);
      var oliveValue = Math.round((fatsValue / 100) * 100);
      var riceValue = Math.round((carbsValue / 32) * 100);
      var eggValue = Math.round(EggProtien / 4);
      if (gainValue > 0) {
        this.setState({
          fats: fatsValue,
          carbs: carbsValue,
          protiens: protiensValue,
          chicken: chickenValue,
          olive: oliveValue,
          rice: riceValue,
          egg: eggValue,
          opened: !opened,
          opened1: false,
        });
      }
    }

    console.log(this.state.lose);
  };
  gainWeight = () => {
    const { opened1 } = this.state;
    if (this.state.bmr < 0 || this.state.bmr === 0) {
      this.setState({ gain: 0 });
    } else {
      this.setState({ gain: this.state.bmr + 500 });
      var gainValue = this.state.gain;
      var fatsValue = Math.round((0.2 * gainValue) / 9);
      var carbsValue = Math.round((0.3 * gainValue) / 4);
      var protiensValue = Math.round((0.5 * gainValue) / 4);
      var chickenProtien = Math.round((protiensValue * 80) / 100);
      var EggProtien = Math.round((protiensValue * 20) / 100);
      var chickenValue = Math.round((chickenProtien / 26) * 100);
      var oliveValue = Math.round((fatsValue / 100) * 100);
      var riceValue = Math.round((carbsValue / 32) * 100);
      var eggValue = Math.round(EggProtien / 4);
      if (gainValue > 0) {
        this.setState({
          fats: fatsValue,
          carbs: carbsValue,
          protiens: protiensValue,
          chicken: chickenValue,
          olive: oliveValue,
          rice: riceValue,
          egg: eggValue,
          opened1: !opened1,
          opened: false,
        });
      }
      console.log(this.state.gain);
    }
  };

  render() {
    const { opened } = this.state;
    const { opened1 } = this.state;
    return (
      <div>
        <div className="card container shadow font-weight-bold">
          <h2>BMR Calculator</h2>
          <h3>Fill in your info</h3>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input type="select" name="select" id="gender">
              <option selected value="Male">
                Male
              </option>
              <option value="Female">Female</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="weight">Weight</Label>
            <Input id="weight" value={this.state.title} />
          </FormGroup>

          <Row>
            <Col>
              <FormGroup>
                <Label for="heightFt">Height feet</Label>
                <Input id="heightFt" value={this.state.title} />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="heightIn">Height inches</Label>
                <Input id="heightIn" value={this.state.title} />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label for="age">Age</Label>
            <Input id="age" value={this.state.title} />
          </FormGroup>

          <Button
            color="success"
            onClick={this.calculateBmr}
            className="btn btn-primary mb-3"
          >
            {" "}
            <strong> Calculate</strong>
          </Button>

          {this.state.bmr > 0 && (
            <div className="h5">
              Your daily calorie intake should be{" "}
              <span className="font-weight-bold">{this.state.bmr}</span>
            </div>
          )}
        </div>

        <div className="mt-5 mb-5">
          <h4 id="gainOrLoss">Do You Want to Gain Weight or lose Weight?</h4>

          <Button
            color="success"
            onClick={this.gainWeight}
            className="btn btn-primary mt-3 mb-3"
          >
            {" "}
            <strong>Gain</strong>
          </Button>

          <Button
            color="success"
            onClick={this.loseWeight}
            className="btn btn-primary mt-3 mb-3"
          >
            <strong>Lose</strong>
          </Button>
          {opened && (
            <div className="boxContent">
              {<LoseWeight lose={this.state.lose} />}{" "}
            </div>
          )}

          {opened1 && (
            <div className="boxContent">
              {<LoseWeight lose={this.state.gain} />}{" "}
            </div>
          )}

          <DietTable
            rice={this.state.rice}
            chicken={this.state.chicken}
            olive={this.state.olive}
            egg={this.state.egg}
          />
        </div>
      </div>
    );
  }
}

export default MyBMR;
