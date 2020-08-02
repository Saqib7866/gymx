import React, { Component } from "react";

import DietTable from "components/BMR/DietTable";
import AppContext from "Context/AppContext";

export default class DietPlan extends Component {
  static contextType = AppContext;
  render() {
    return (
      <div>
        <DietTable
          rice={this.context.dietTable.rice}
          chicken={this.context.dietTable.chicken}
          olive={this.context.dietTable.olive}
          egg={this.context.dietTable.egg}
        />
      </div>
    );
  }
}
