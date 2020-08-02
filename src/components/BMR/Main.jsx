import React, { Component } from "react";
import MyBMR from "./MyBMR";
import MyBMI from "./MyBMI";

class Main extends Component {
  state = {};
  render() {
    return (
<<<<<<< HEAD
      <div style={{ background: "#add8e6" }} className="container">
=======
      <div className="container mt-7">
>>>>>>> ef74aa6bcef19ad0b1c7ea61f854e49936b6594c
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
