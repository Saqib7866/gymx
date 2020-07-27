import React from "react";
import "./register.css";

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
  Alert,
  Spinner,
} from "reactstrap";
import Axios from "axios";
import { history } from "../../history";
import AppContext from "Context/AppContext";

class Register extends React.Component {
  static contextType = AppContext;
  state = {
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    policy: false,
    error: "",
    loading: false,
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.loading) {
      this.setState({ error: "" });
      this.setState({ loading: true });

      if (this.state.password !== this.state.confirmPass) {
        this.setState({ error: "Password does not match" });
        return;
      }
      if (!this.state.policy) {
        this.setState({ error: "Please check the Privacy Policy" });
        return;
      }

      Axios.post(process.env.REACT_APP_API_URL + "/auth/local/register", {
        name: this.state.name,
        username: this.state.email.split("@")[0],
        email: this.state.email,
        password: this.state.password,
      })
        .then((res) => {
          localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, res.data.jwt);
          this.context.setUser(res.data.user);
          history.push("/");
          this.setState({ loading: false });
        })
        .catch((res) => {
          this.setState({
            error: res.response.data.data[0].messages[0].message,
          });
          this.setState({ loading: false });
        });
    }
  };

  render() {
    return (
      <>
        <main ref="main">
          <div className="mt-5 bg ">
            <Container className="text-center">
              <Row className="justify-content-center ">
                <Col sm="5" className="text-center">
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

                      {this.state.error && (
                        <Alert
                          color="danger"
                          style={{
                            backgroundColor: "rgba(217, 83, 79,0.4)",
                          }}
                        >
                          {this.state.error}
                        </Alert>
                      )}

                      <Form role="form" onSubmit={this.handleSubmit}>
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
                              value={this.state.name}
                              onChange={(e) => {
                                this.setState({ name: e.target.value });
                              }}
                              required
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
                              value={this.state.email}
                              onChange={(e) => {
                                this.setState({ email: e.target.value });
                              }}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
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
                              value={this.state.password}
                              onChange={(e) => {
                                this.setState({
                                  password: e.target.value,
                                });
                              }}
                              required
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
                              placeholder="Confirm Password"
                              type="password"
                              autoComplete="off"
                              value={this.state.confirmPass}
                              onChange={(e) => {
                                this.setState({
                                  confirmPass: e.target.value,
                                });
                              }}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                                checked={this.state.policy}
                                onClick={(e) => {
                                  this.setState({ policy: !this.state.policy });
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  I agree with the{" "}
                                  <a
                                    href="#"
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
                            type="submit"
                          >
                            {this.state.loading ? (
                              <Spinner color="white" size="sm" />
                            ) : (
                              "Create account"
                            )}
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
