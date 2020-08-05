import React from "react";

// reactstrap components
import {
  Button,
  PopoverBody,
  UncontrolledPopover,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import "./ndashboard.css";
import AppContext from "Context/AppContext";
import { Redirect } from "react-router";
import Axios from "axios";

class NDashboard extends React.Component {
  static contextType = AppContext;
  state = {
    loading: true,
  };

  componentDidMount() {
    Axios.get(process.env.REACT_APP_API_URL + "/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          process.env.REACT_APP_TOKEN_NAME
        )}`,
      },
    }).then((res) => {
      this.setState({ loading: false });
    });
  }
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
              if (
                !c.loading &&
                c.user.user_type &&
                c.user.user_type.name === "Nutritionist"
              ) {
                return (
                  <>
                    <div className="backk  section">
                      <Row>
                        <Col sm="12">
                          <div className="d-flex justify-content-center">
                            <img
                              alt={c.user.image.name}
                              className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                              src={
                                process.env.REACT_APP_API_URL + c.user.image.url
                              }
                              style={{
                                width: "200px",
                                height: "200px",
                              }}
                            />
                          </div>
                        </Col>
                        <Col sm="12">
                          <div
                            style={{
                              textAlign: "right",
                              marginBottom: "50px",
                              marginRight: "250px",
                            }}
                          >
                            <Button
                              color="primary"
                              id="tooltip641002859"
                              type="button"
                            >
                              Request
                            </Button>
                            <UncontrolledPopover
                              placement="right"
                              target="tooltip641002859"
                            >
                              <PopoverBody>
                                <div>
                                  <textarea
                                    className="form-control"
                                    style={{ width: "300px", height: "300px" }}
                                    type="text"
                                    placeholder="Enter text here"
                                  />
                                </div>
                              </PopoverBody>
                            </UncontrolledPopover>
                          </div>
                        </Col>
                      </Row>

                      <Form
                        style={{ textAlign: "right" }}
                        className="container"
                      >
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <Input
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Input
                                className=""
                                placeholder="Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-zoom-split-in" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Price" type="number" />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <InputGroup className="mb-4">
                                <Input placeholder="Contact" type="number" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>
                                    <i className="ni ni-zoom-split-in" />
                                  </InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup className="has-success">
                              <Input
                                className="is-valid"
                                placeholder="Education"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="has-success">
                              <Input
                                className="is-valid"
                                placeholder="Password"
                                type="password"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <div>
                          <textarea
                            className="form-control"
                            style={{ width: "500px" }}
                            placeholder="Achievement"
                          />
                        </div>
                        <div style={{ float: "left", marginTop: "10px" }}>
                          <Button color="success" type="button">
                            Save
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </>
                );
              } else {
                return <Redirect to="/user-dashboard" />;
              }
            }
          }}
        </AppContext.Consumer>
      );
    }
  }
}

export default NDashboard;
