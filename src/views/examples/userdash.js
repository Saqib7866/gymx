import React from "react";

import { NavLink, Redirect } from "react-router-dom";
import "./userdash.css";
// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  Row,
  Col,
  Spinner,
  Container,
} from "reactstrap";
import AppContext from "Context/AppContext";
import noimage from "../../assets/img/user/no-image.png";
import background from "../../assets/img/theme/workout.jpg";

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
                <div
                  className="mt-5"
                  style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Container className="pt-5 pb-8">
                    <Row className="container">
                      <Col
                        sm="12"
                        className="d-flex flex-column align-items-center"
                      >
                        <div>
                          <img
                            alt={
                              c.user.image ? c.user.image.name : "user-image"
                            }
                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                            src={
                              c.user.image
                                ? process.env.REACT_APP_API_URL +
                                  c.user.image.url
                                : noimage
                            }
                            style={{
                              width: "190px",
                              height: "190px",
                            }}
                          />
                        </div>
                      </Col>
                      <Col sm="12">
                        <div className="mx-8 px-8">
                          <Input
                            className="form-control-alternative my-1"
                            disabled
                            placeholder="Name"
                            type="text"
                            value={c.user.name}
                          />
                          <Input
                            className="form-control-alternative my-1"
                            disabled
                            placeholder="Contact Number"
                            type="number"
                            value={c.user.phone_number}
                          />
                          <Input
                            className="form-control-alternative my-1"
                            disabled
                            placeholder="Address"
                            type="text"
                            value={c.user.address}
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12" className="text-center">
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
                            <strong style={{ color: " white" }}>Events</strong>
                          </Button>
                        </NavLink>
                      </Col>
                      <Col md="6" className="text-center">
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

                      <Col md="6" className="text-center">
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
                      <Col md="6" className="text-center">
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
                            <strong style={{ color: " white" }}>Workout</strong>
                          </Button>
                        </NavLink>
                      </Col>

                      <Col md="6" className="text-center">
                        <NavLink to="/bmr-bmi" className="BMR">
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
                            <strong style={{ color: " white" }}>My BMR</strong>
                          </Button>
                        </NavLink>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6" className="text-center">
                        <NavLink to="/book-nutrionist" className="HNuts">
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
                              Book Nutritionist
                            </strong>
                          </Button>
                        </NavLink>
                      </Col>
                      <Col md="6" className="text-center">
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
                  </Container>
                </div>
              );
            }
          }}
        </AppContext.Consumer>
      );
    }
  }
}

export default Userdash;
