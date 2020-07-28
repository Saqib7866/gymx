import React, { Component } from "react";
import MyBMR from "./MyBMR";
import MyBMI from "./MyBMI";

class Main extends Component {
  state = {};
  render() {
    return (
      <div style={{ background: "#add8e6" }} className="container">
        <div className="row">
          <div className="col-lg-5">
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
