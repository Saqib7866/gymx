import React from "react";
// nodejs library that concatenates classes

import { NavLink } from "react-router-dom";
import "./userdash.css";
// reactstrap components
import { Button, FormGroup, Input, Row, Col } from "reactstrap";

class Userdash extends React.Component {
  state = {
    huss() {
      this.setstate.edit = "enabled";
    },
    name: "",
    contact: "",
    address: "",
    newPass: "",
  };
  render() {
    return (
      <>
        <div className="back21 ">
          <div className="section">
            <div className="">
              <Button
                color="warning"
                style={{
                  float: "right",
                  marginTop: "-75px",
                  marginRight: "50px",
                }}
              >
                Logout
              </Button>
            </div>
            <Row style={{ float: "left", marginLeft: "20px" }}>
              <div className="px-4">
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/team-1-800x800.jpg")}
                  style={{
                    width: "200px",
                    height: "200px",
                    marginLeft: "30px",
                  }}
                />
                <div>
                  <FormGroup>
                    <Input
                      style={{ marginTop: "5px" }}
                      id="edit"
                      className="form-control-alternative"
                      disabled
                      placeholder="Name"
                      type="text"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                    <Input
                      style={{ marginTop: "5px" }}
                      id="edit"
                      className="form-control-alternative"
                      disabled
                      placeholder="Contact Number"
                      type="number"
                      value={this.state.contact}
                      onChange={(e) => {
                        this.setState({ name: e.target.contact });
                      }}
                    />
                    <Input
                      style={{ marginTop: "5px" }}
                      id="edit"
                      className="form-control-alternative"
                      disabled
                      placeholder="New Password"
                      type="text"
                      value={this.state.newPass}
                      onChange={(e) => {
                        this.setState({ name: e.target.newPass });
                      }}
                    />
                    <Input
                      style={{ marginTop: "5px" }}
                      id="edit"
                      className="form-control-alternative"
                      disabled
                      placeholder="Address"
                      type="text"
                      value={this.state.address}
                      onChange={(e) => {
                        this.setState({ name: e.target.address });
                      }}
                    />
                    <Button style={{ marginTop: "5px" }} color="danger">
                      Save
                    </Button>
                  </FormGroup>
                </div>
              </div>
            </Row>
            <div className="container section ">
              <Row>
                <Col md="6">
                  <Button
                    style={{
                      height: "100px",
                      width: "300px",
                      marginTop: "15px",
                    }}
                    color="danger"
                    outline
                    type="button"
                  >
                    <NavLink to="/DietPlan" className="DietPlan">
                      <strong style={{ color: " white" }}>Diet Plan</strong>
                    </NavLink>
                  </Button>
                </Col>

                <Col md="6">
                  <Button
                    style={{
                      height: "100px",
                      width: "300px",
                      marginTop: "15px",
                    }}
                    color="info"
                    outline
                    type="button"
                  >
                    <NavLink to="/ProgressRecord" className="ProgressRecord">
                      <strong style={{ color: " white" }}>
                        {" "}
                        Progress Record
                      </strong>
                    </NavLink>
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <Button
                    style={{
                      height: "100px",
                      width: "300px",
                      marginTop: "15px",
                    }}
                    color="warning"
                    outline
                    type="button"
                  >
                    <NavLink to="/Workout" className="Workout">
                      <strong style={{ color: " white" }}>Workout</strong>
                    </NavLink>
                  </Button>
                </Col>

                <Col md="6">
                  <Button
                    style={{
                      height: "100px",
                      width: "300px",
                      marginTop: "15px",
                    }}
                    color="warning  "
                    outline
                    type="button"
                  >
                    <NavLink to="/MyBMR" className="BMR">
                      <strong style={{ color: " white" }}>My BMR</strong>
                    </NavLink>
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Button
                    style={{
                      height: "100px",
                      width: "300px",
                      marginTop: "15px",
                    }}
                    color="success"
                    outline
                    type="button"
                  >
                    <NavLink to="/Events" className="Events">
                      <strong style={{ color: " white" }}> Events</strong>
                    </NavLink>
                  </Button>
                </Col>
                <Col sm="6">
                  <Button
                    style={{
                      height: "100px",
                      width: "300px",
                      marginTop: "15px",
                    }}
                    color="info"
                    outline
                    type="button"
                  >
                    <NavLink to="/HNuts" className="HNuts">
                      <strong style={{ color: " white" }}>
                        s Hired Nutritionist
                      </strong>
                    </NavLink>
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Userdash;
