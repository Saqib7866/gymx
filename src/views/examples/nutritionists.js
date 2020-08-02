import React from "react";

import "./nutritionists.css";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Nuts extends React.Component {
  state = {
    name: "Asad",
    achievments: "Nil",
    fee: "200",
    tel: "030000",
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main className="back1" ref="main">
          <section className="container">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            {this.state.name}
                          </h6>
                          <p className="description mt-3">
                            {this.state.achievments}
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              ${this.state.fee}
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              {this.state.tel}
                            </Badge>
                          </div>
                          <Button
                            onClick="showAlert()"
                            className="mt-4"
                            color="primary"
                            href=""
                          >
                            Book & Appointment
                          </Button>
                        </CardBody>
                      </Card>
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

export default Nuts;
