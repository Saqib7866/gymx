import React, { Component } from "react";
import MyBMR from "./MyBMR";
import MyBMI from "./MyBMI";
import background from "../../assets/img/theme/workout.jpg";

class Main extends Component {
  state = {};
  render() {
    return (
      <div
        className="mt-5"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6">
              <MyBMR />
            </div>

            <div className="col-lg-6">
              <MyBMI />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
