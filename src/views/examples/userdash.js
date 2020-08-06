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
                            <NavLink to="/diet-plan" className="DietPlan">
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
                                <strong style={{ color: " white" }}>
                                  Diet Plan
                                </strong>
                              </Button>
                            </NavLink>
                          </Col>

                          <Col md="6">
                            <NavLink
                              to="/progress-record"
                              className="ProgressRecord"
                            >
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
                                <strong style={{ color: " white" }}>
                                  {" "}
                                  Progress Record
                                </strong>
                              </Button>
                            </NavLink>
                          </Col>
                        </Row>

                        <Row>
                          <Col md="6">
                            <NavLink to="/workout" className="Workout">
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
                                <strong style={{ color: " white" }}>
                                  Workout
                                </strong>
                              </Button>
                            </NavLink>
                          </Col>

                          <Col md="6">
                            <NavLink to="/mybmr" className="BMR">
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
                                <strong style={{ color: " white" }}>
                                  My BMR
                                </strong>
                              </Button>
                            </NavLink>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6">
                            <NavLink to="/events" className="Events">
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
                                <strong style={{ color: " white" }}>
                                  Events
                                </strong>
                              </Button>
                            </NavLink>
                          </Col>
                          <Col sm="6">
                            <NavLink to="/hired-nutritionist" className="HNuts">
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
                                <strong style={{ color: " white" }}>
                                  Hired Nutritionist
                                </strong>
                              </Button>
                            </NavLink>
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
