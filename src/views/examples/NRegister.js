import React from "react";
import "./nutritionists.css";

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

class NRegister extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <section className="section  nutritionist-bg">
            <Container className=" ml-n9">
              <Row className="justify-content-center ">
                <Col sm="5">
                  <Card
                    className="mt-n8 ml-n9"
                    style={{
                      backgroundColor: "rgba(52,52,52,0.1)",
                      color: "white",
                    }}
                  >
                    <CardBody className="px-sm-5 py-sm-5">
                      <div className="text-center">
                        <h4 className="mb-3 " style={{ color: "white" }}>
                          <strong>Sign Up With Credentials</strong>
                        </h4>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative ">
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
                          <InputGroup className="input-group-alternative ">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{
                                  backgroundColor: "rgba(52,52,52,0.4)",
                                }}
                              >
                                <i class="fa fa-phone" aria-hidden="true"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{
                                backgroundColor: "rgba(52,52,52,0.4)",
                                color: "white",
                              }}
                              placeholder="Contact Number"
                              type="tel"
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative ">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{
                                  backgroundColor: "rgba(52,52,52,0.4)",
                                }}
                              >
                                <i class="fa fa-trophy" aria-hidden="true"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{
                                backgroundColor: "rgba(52,52,52,0.4)",
                                color: "white",
                              }}
                              placeholder="Achievments"
                              type="tel"
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative ">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{
                                  backgroundColor: "rgba(52,52,52,0.4)",
                                }}
                              >
                                <i class="fa fa-money" aria-hidden="true"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{
                                backgroundColor: "rgba(52,52,52,0.4)",
                                color: "white",
                              }}
                              placeholder="Per Visit Fee"
                              type="tel"
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative ">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{
                                  backgroundColor: "rgba(52,52,52,0.4)",
                                }}
                              >
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{
                                backgroundColor: "rgba(52,52,52,0.4)",
                                color: "white",
                              }}
                              placeholder="Education"
                              type="tel"
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative ">
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
                        <FormGroup className="mb-2">
                          <InputGroup className="input-group-alternative ">
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

                        <Row className="my-2">
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
                        <div className="text-center ">
                          <Button
                            className="mt-4"
                            color="default"
                            type="button"
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
          </section>
        </main>
      </>
    );
  }
}

export default NRegister;
