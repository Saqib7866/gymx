import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/img/theme/sun.jpg";
import Slider2 from "../../assets/img/theme/mandumbell.jpg";
import Slider3 from "../../assets/img/theme/manrod.jpg";
import Slider4 from "../../assets/img/theme/3in1.jpg";
import "./Carosel.css";
class Carosell extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Carousel className="pt-5 mt-n4" interval="2600">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ height: "530px" }}
            src={Slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "530px" }}
            src={Slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 CarouselSetting"
            style={{ height: "530px" }}
            src={Slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "530px" }}
            src={Slider4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carosell;
