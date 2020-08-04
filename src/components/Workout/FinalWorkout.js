import React, { Component } from "react";
import Workout from "./workout";
import Workout1 from "./workout1";

export default class FinalWorkout extends Component {
  render() {
    return (
      <div>
        <Workout>
          <Workout1></Workout1>
        </Workout>
      </div>
    );
  }
}
