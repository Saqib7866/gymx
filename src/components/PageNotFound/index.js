import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import background from "../../assets/img/theme/workout.jpg";

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container vh-100 d-flex align-items-center justify-content-center">
          <div>
            <h1 className="text-center text-white mt-5 pt-5">
              404|Page not found
            </h1>
            <h5 className="text-center mt-5">
              <NavLink className="mr-auto text-primary" to="/">
                Go to home
              </NavLink>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
