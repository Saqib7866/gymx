import React from "react";

import { NavLink, Redirect } from "react-router-dom";
import "./userdash.css";
// reactstrap components
import { Button, FormGroup, Input, Row, Col, Spinner } from "reactstrap";
import AppContext from "Context/AppContext";
import noimage from "../../assets/img/user/no-image.png";

class Userdash extends React.Component {
  static contextType = AppContext;
  state = {
    huss() {
      this.setstate.edit = "enabled";
    },
    name: "",
    contact: "",
    address: "",
    newPass: "",
    loading: false,
  };

  render() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) === null) {
      return <Redirect to="/login" />;
    } else {
      return (
        <AppContext.Consumer>
          {(c) => {
            if (this.state.loading) {
              return (
                <div className="d-flex vh-100 justify-content-center align-items-center">
                  <Spinner size="lg" color="primary" />
                </div>
              );
            } else {
              return (
                <>
                  <div className="back21 ">
                    <div className="section">
                      <Row style={{ float: "left", marginLeft: "20px" }}>
                        <div className="px-4">
                          <img
                            alt="..."
                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                            src={
                              c.user.image
                                ? process.env.REACT_APP_API_URL +
                                  c.user.image.url
                                : noimage
                            }
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
                                value={c.user.name}
                              />
                              <Input
                                style={{ marginTop: "5px" }}
                                id="edit"
                                className="form-control-alternative"
                                disabled
                                placeholder="Contact Number"
                                type="number"
                                value={c.user.phone_number}
                              />
                              <Input
                                style={{ marginTop: "5px" }}
                                id="edit"
                                className="form-control-alternative"
                                disabled
                                placeholder="Address"
                                type="text"
                                value={c.user.address}
                              />
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
                                <strong style={{ color: " white" }}>
                                  Diet Plan
                                </strong>
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
                              <NavLink
                                to="/ProgressRecord"
                                className="ProgressRecord"
                              >
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
                              <NavLink to="/workout" className="Workout">
                                <strong style={{ color: " white" }}>
                                  Workout
                                </strong>
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
                                <strong style={{ color: " white" }}>
                                  My BMR
                                </strong>
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
                              <NavLink to="/events" className="Events">
                                <strong style={{ color: " white" }}>
                                  Events
                                </strong>
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
          }}
        </AppContext.Consumer>
      );
    }
  }
}

export default Userdash;
