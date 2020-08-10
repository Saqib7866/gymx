import React from "react";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Spinner,
  Label,
  Button,
  Container,
} from "reactstrap";
import "./ndashboard.css";
import AppContext from "Context/AppContext";
import { Redirect } from "react-router";
import noImage from "../../assets/img/user/no-image.png";
import { Link } from "react-router-dom";

class NDashboard extends React.Component {
  static contextType = AppContext;
  state = {
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
                              placeholder="name@example.com"
                              type="email"
                              value={
                                this.context.user.email
                                  ? this.context.user.email
                                  : ""
                              }
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
                              value={
                                this.context.user.name
                                  ? this.context.user.name
                                  : ""
                              }
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
                              value={
                                this.context.user.fee
                                  ? this.context.user.fee
                                  : ""
                              }
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
                              value={
                                this.context.user.phone_number
                                  ? this.context.user.phone_number
                                  : ""
                              }
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
                          value={
                            this.context.user.achievements
                              ? this.context.user.achievements
                              : ""
                          }
                          disabled
                        />
                      </FormGroup>
                    </Form>
                    <Container>
                      <Row>
                        <Col sm="12" className="text-center">
                          <Link to="/client-bookings">
                            <Button color="primary" outline>
                              Client Bookings
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Container>
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

export default NDashboard;
