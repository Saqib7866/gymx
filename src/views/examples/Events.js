import React, { Component } from "react";
import "./Navbarr.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import * as ReactBootStrap from "react-bootstrap";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Spinner,
  Alert,
} from "reactstrap";
class Events extends Component {
  state = {
    eventName: "Protein",
    eventDescp: "Protein for muscle building",
    eventImg: "../../assets/img/theme/bghome.jpg",
  };
  render() {
    return (
      <div>
        <div>
          <h2 className="mb-3 mt-3 text-center">
            <strong>Current Events</strong>
          </h2>
          <Card style={{ width: "18rem" }}>
            <CardImg variant="top" src="{this.state.eventImg} " />
            <CardBody>
              <CardTitle>
                <h4>
                  <strong>{this.state.eventName}</strong>
                </h4>
              </CardTitle>
              <CardText>
                <h6>
                  <strong>{this.state.eventDescp}</strong>
                </h6>
              </CardText>
            </CardBody>

            <CardBody className="text-center ">
              <Button className="mt-4" color="default" type="submit">
                {this.state.loading ? (
                  <Spinner color="white" size="sm" />
                ) : (
                  "Register Yourself"
                )}
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Events;
