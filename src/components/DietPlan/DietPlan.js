import React, { Component } from "react";

import { Card, CardTitle, CardBody } from "reactstrap";

import background from "../../assets/img/theme/workout.jpg";

import DietTable from "components/BMR/DietTable";
import AppContext from "Context/AppContext";

export default class DietPlan extends Component {
  static contextType = AppContext;
  render() {
    return (
      <div
        className="vh-100"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mb-9">
          <Card className="pt-3 mt-4 shadow">
            <CardTitle className="h2 container">Diet Plan</CardTitle>
            <CardBody>
              <DietTable
                rice={
                  this.context.user.diet_plan
                    ? this.context.user.diet_plan.rice
                    : this.context.dietTable.rice
                }
                chicken={
                  this.context.user.diet_plan
                    ? this.context.user.diet_plan.chicken
                    : this.context.dietTable.chicken
                }
                olive={
                  this.context.user.diet_plan
                    ? this.context.user.diet_plan.olive
                    : this.context.dietTable.olive
                }
                egg={
                  this.context.user.diet_plan
                    ? this.context.user.diet_plan.egg
                    : this.context.dietTable.egg
                }
              />
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
