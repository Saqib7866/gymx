import React from "react";

// reactstrap components
import { FormGroup, Form, Input, Row, Col, Spinner, Label } from "reactstrap";
import "./ndashboard.css";
import AppContext from "Context/AppContext";
import { Redirect } from "react-router";
import Axios from "axios";
import noImage from "../../assets/img/user/no-image.png";

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
                      <Row className="m-5">
                        <Col sm="12">
                          <div className="d-flex justify-content-center">
                            <img
                              alt={
                                c.user.image ? c.user.image.name : "user-image"
                              }
                              className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                              src={
                                c.user.image
                                  ? process.env.REACT_APP_API_URL +
                                    c.user.image.url
                                  : noImage
                              }
                              style={{
                                width: "200px",
                                height: "200px",
                              }}
                            />
                          </div>
                        </Col>
                      </Row>

                      <Form className="container">
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <Label>Email</Label>
                              <Input
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                type="email"
                                value={this.context.user.email}
                                disabled
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Label>Name</Label>
                              <Input
                                className=""
                                placeholder="Name"
                                type="text"
                                value={this.context.user.name}
                                disabled
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <Label>Fee</Label>
                              <Input
                                placeholder="Fee"
                                type="number"
                                value={this.context.user.fee}
                                disabled
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Label>Contact No.</Label>
                              <Input
                                placeholder="Contact"
                                type="number"
                                value={this.context.user.phone_number}
                                disabled
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <Label>Achievements</Label>
                          <Input
                            type="text"
                            placeholder="Achievements"
                            value={JSON.parse(
                              this.context.user.achievements
                            ).toString()}
                            disabled
                          />
                        </FormGroup>
                        {/* <div style={{ float: "left", marginTop: "10px" }}>
                          <Button color="success" type="button">
                            Save
                          </Button>
                        </div> */}
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
