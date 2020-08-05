import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../history";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
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

import SimpleFooter from "components/Footers/SimpleFooter.js";
import axios from "axios";
import { Redirect } from "react-router";
import AppContext from "Context/AppContext";

class Login extends React.Component {
  static contextType = AppContext;
  state = {
    email: "",
    password: "",
    error: "",
    loading: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.loading) {
      this.setState({ error: "" });
      this.setState({ loading: true });
      axios
        .post(process.env.REACT_APP_API_URL + "/auth/local", {
          identifier: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, res.data.jwt);
          this.context.setUser(res.data.user);
          this.setState({ loading: false });
          if (res.data.user.user_type.name === "Member") {
            history.push("/user-dashboard");
            // return <Redirect to="/user-dashboard" />;
          } else {
            history.push("/nutritionist-dashboard");
          }
        })
        .catch((error) => {
          this.setState({
            error: error.response.data.data[0].messages[0].message,
          });
          this.setState({ loading: false });
        });
    }
  };

  render() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) !== null) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default"></div>
            <Container className="pt-8">
              <Row className="justify-content-center mt-n7">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-3">
                      <div className="text-muted text-center mb-1">
                        <h5>
                          <strong>Sign in with</strong>{" "}
                        </h5>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      {this.state.error && (
                        <Alert color="danger">{this.state.error}</Alert>
                      )}

                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
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
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              value={this.state.password}
                              onChange={(e) => {
                                this.setState({ password: e.target.value });
                              }}
                            />
                          </InputGroup>
                        </FormGroup>

                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                          >
                            {this.state.loading ? (
                              <Spinner color="white" size="sm" />
                            ) : (
                              "Sign in"
                            )}
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6"></Col>
                    <Col className="text-right" xs="6">
                      <NavLink to="/Register" className=" btn text-light">
                        <small> Create new account</small>
                      </NavLink>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Login;
