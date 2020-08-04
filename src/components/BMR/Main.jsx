import React, { Component } from "react";
import MyBMR from "./MyBMR";
import MyBMI from "./MyBMI";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-7">
        <div className="row">
          <div className="col-lg-6">
            <MyBMR />
          </div>

          <div className="col-lg-6">
            <MyBMI />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
