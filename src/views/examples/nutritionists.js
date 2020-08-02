import React from "react";

import "./nutritionists.css";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Input,
  InputGroupAddon,
  InputGroup,
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";

class Nuts extends React.Component {
  state = {
    search: "",
    nutritionists: [
      {
        name: "Asad",
        achievments: ["abc", "def", "ghi"],
        fee: "200",
        tel: "030000",
      },
    ],
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <div>
        <div className="back1">
          <div className="d-flex justify-content-center m-5 navbar sticky-top">
            <div className="mt-5 w-50">
              <InputGroup>
                <Input
                  placeholder="Search"
                  value={this.state.search}
                  onChange={(e) => {
                    this.setState({ search: e.target.value });
                  }}
                />
                <InputGroupAddon addonType="append">
                  <Button color="dark" style={{ height: "100%" }}>
                    <span className="fa fa-search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
          <Container fluid className="mt-5 px-7">
            <Row>
              {this.state.nutritionists.map((nutritionist) => {
                return (
                  <Col lg="3" md="6" className="my-3">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          {nutritionist.name}
                        </h6>
                        <span className="description mt-3">
                          {nutritionist.achievments.map((a) => {
                            return (
                              <Badge color="primary" pill className="mr-1">
                                {a}
                              </Badge>
                            );
                          })}
                        </span>
                        <Row className="mt-3">
                          <Col sm="4">
                            <Label>Contact No.</Label>
                          </Col>
                          <Col sm="8">
                            <Label>{nutritionist.tel}</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="4">
                            <Label>Charges</Label>
                          </Col>
                          <Col sm="8">
                            <Label>{nutritionist.fee}</Label>
                          </Col>
                        </Row>
                        <Button className="mt-4" color="primary" block>
                          Book & Appointment
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Nuts;
