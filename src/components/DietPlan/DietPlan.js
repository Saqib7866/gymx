import React, { Component } from "react";

import { Card, CardTitle, CardBody } from "reactstrap";

import DietTable from "components/BMR/DietTable";
import AppContext from "Context/AppContext";

export default class DietPlan extends Component {
  static contextType = AppContext;
  render() {
    return (
      <div className="container mt-9 mb-9">
        <Card className="p-3 shadow">
          <CardTitle className="h2 container">Diet Plan</CardTitle>
          <CardBody>
            <DietTable
              rice={this.context.dietTable.rice}
              chicken={this.context.dietTable.chicken}
              olive={this.context.dietTable.olive}
              egg={this.context.dietTable.egg}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}
