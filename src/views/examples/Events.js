import React, { Component } from "react";
import "./Navbarr.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import eventImg from "../../assets/img/theme/bghome.jpg";
import noImage from "../../assets/img/user/no-image.png";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  successToast = (name) => {
    toast("🦄 You Have Been Registered In " + name + " Succesfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  render() {
    return (
      <div>
        <div className="mx-5 mb-5 mt-4 text-center">
          <Card className="  border-light" style={{ width: "18rem" }}>
            <CardImg
              variant="top"
              src={
                this.props.eventImg !== undefined
                  ? process.env.REACT_APP_API_URL + this.props.eventImg.url
                  : noImage
              }
            />
            <CardBody>
              <CardTitle>
                <h4>
                  <strong>{this.props.eventName}</strong>
                  <br></br>
                  {this.props.eventDate}
                </h4>
              </CardTitle>
              <CardText>
                <p className="justify-content-center  ">
                  <strong>{this.props.eventDescp}</strong>
                </p>
              </CardText>
            </CardBody>

            <CardBody className="text-center ">
              <Button
                className="mt-4"
                color="default"
                onClick={() => {
                  this.successToast(this.props.eventName);
                }}
              >
                Register Yourself
              </Button>
            </CardBody>
          </Card>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Events;
