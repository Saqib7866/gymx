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
} from "reactstrap";
import "./ndashboard.css";

class NDashboard extends React.Component {
  render() {
    return (
      <>
        <div className="backk  section">
          <div>
            <Button
              color="warning"
              style={{
                float: "right",
                marginTop: "-35px",
                marginRight: "50px",
              }}
            >
              Logout
            </Button>
          </div>
          <Row>
            <Col md="6">
              <div className="px-4">
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("assets/img/theme/team-1-800x800.jpg")}
                  style={{
                    width: "200px",
                    height: "200px",
                    marginLeft: "140px",
                    marginBottom: "70px",
                  }}
                />
              </div>
            </Col>
            <Col md="6">
              <div
                style={{
                  textAlign: "right",
                  marginBottom: "50px",
                  marginRight: "250px",
                }}
              >
                <Button color="primary" id="tooltip641002859" type="button">
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
                      />
                    </div>
                  </PopoverBody>
                </UncontrolledPopover>
              </div>
            </Col>
          </Row>

          <Form style={{ textAlign: "right" }} className="container">
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
                  <Input className="" placeholder="Name" type="text" />
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
  }
}

export default NDashboard;
