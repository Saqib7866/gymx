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
  Spinner,
} from "reactstrap";
import Axios from "axios";
import noimage from "../../assets/img/user/no-image.png";
import { AlertCircle } from "react-feather";

class Nuts extends React.Component {
  state = {
    search: "",
    nutritionists: [],
    loading: true,
  };
  componentDidMount() {
    Axios.get(process.env.REACT_APP_API_URL + "/user-types?name=Nutritionist")
      .then((res) => {
        this.setState({ nutritionists: res.data[0].users, loading: false });
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render() {
    function searchingFor(term) {
      return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
      };
    }

    let nutritionistsData = this.state.nutritionists
      .filter(searchingFor(this.state.search))
      .map((nutritionist) => {
        return (
          <Col key={nutritionist.id} lg="3" md="6" className="my-3">
            <Card className="card-lift--hover shadow border-0">
              <CardBody className="py-5">
                <div className="text-center mb-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid"
                    src={
                      nutritionist.image
                        ? process.env.REACT_APP_API_URL + nutritionist.image.url
                        : noimage
                    }
                  />
                </div>
                <h6 className="text-primary text-uppercase">
                  {nutritionist.name}
                </h6>
                <span className="description mt-3">
                  {nutritionist.achievements &&
                    nutritionist.achievements.split(",").map((a) => {
                      return (
                        <Badge key={a} color="primary" pill className="mr-1">
                          {a}
                        </Badge>
                      );
                    })}
                </span>
                <Row className="mt-3">
                  <Col sm="4">
                    <Label className="text-primary">Contact No.</Label>
                  </Col>
                  <Col sm="8">
                    <Label>{nutritionist.phone_number}</Label>
                  </Col>
                </Row>
                <Row>
                  <Col sm="4">
                    <Label className="text-primary">Charges</Label>
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
      });

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
          {this.state.loading && (
            <div className="vh-100 d-flex justify-content-center align-items-center">
              <Spinner size="lg" color="primary" />
            </div>
          )}
          {!this.state.loading && (
            <Container fluid className="mt-5 px-7">
              <Row>
                {nutritionistsData.length > 0 && nutritionistsData}

                {nutritionistsData.length === 0 && (
                  <div className="my-8">
                    <div className="w-100 mx-auto h1 text-primary font-weight-bold mb-8 pb-8">
                      <AlertCircle size="40" />{" "}
                      <span>There are no nutritionists...</span>
                    </div>
                  </div>
                )}
              </Row>
            </Container>
          )}
        </div>
      </div>
    );
  }
}

export default Nuts;
