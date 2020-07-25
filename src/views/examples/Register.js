import React from "react";
import "./register.css";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Register extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <div className="mt-5 bg ">
            <Container className=" ml-n9">
              <Row className="justify-content-center ">
                <Col sm="5">
                  <Card
                    className="mt-n5 ml-n9"
                    style={{
                      backgroundColor: "rgba(52,52,52,0.1)",
                      color: "white",
                    }}
                  >
                    <CardBody className="px-sm-lg-5 py-sm-lg-5 mt-5">
                      <div className=" col-sm-12 text-center  mb-4">
                        <h4 className="mb-5" style={{ color: "white" }}>
                          <strong>Sign Up With Credentials</strong>
                        </h4>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className=" col-sm-12 input-group-alternative mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{
                                  backgroundColor: "rgba(52,52,52,0.4)",
                                }}
                              >
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{
                                backgroundColor: "rgba(52,52,52,0.4)",
                                color: "white",
                              }}
                              placeholder="Name"
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className=" col-sm-12 input-group-alternative mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{
                                  backgroundColor: "rgba(52,52,52,0.4)",
                                }}
                              >
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{
                                backgroundColor: "rgba(52,52,52,0.4)",
                                color: "white",
                              }}
                              placeholder="Email"
                              type="email"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-5">
                          <InputGroup className="col-sm-12 input-group-alternative mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{
                                  backgroundColor: "rgba(52,52,52,0.4)",
                                }}
                              >
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{
                                backgroundColor: "rgba(52,52,52,0.4)",
                                color: "white",
                              }}
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className=" font-italic">
                          <small style={{ color: "white" }}>
                            password strength:{" "}
                            <span className="text-success font-weight-700">
                              strong
                            </span>
                          </small>
                        </div>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  I agree with the{" "}
                                  <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    style={{
                                      backgroundColor: "rgba(52,52,52,0.4)",
                                      color: "red",
                                    }}
                                  >
                                    <strong> Privacy Policy</strong>
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center mb-5">
                          <Button
                            className="mt-4"
                            color="default"
                            type="button"
                            href="/UserDashboard"
                          >
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </>
    );
  }
}

export default Register;
