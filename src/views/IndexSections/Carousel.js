import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/signup.jpg"),
    altText: "",
    caption: "",
    header: "",
  },

  {
    src: require("assets/img/theme/nutrionist.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default"></div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  <srong>WE PROVIDE NUTRIONISTS !</srong>
                </h1>
                <p className="lead text-white mt-2">
                  Nutritionists or Dietitians or Dieticians help Patients with
                  their Nutrition and Diet specific concerns. Some of the common
                  issues they help with include Diabetes Diet, Weight Management
                  or Obesity Diet and Managing Eating Disorders. Book
                  Appointment With a Top Nutritionist in Seconds. Find the best
                  Nutritionist s with upto date practice locations.
                </p>
                <Button
                  className="btn-white mt-2"
                  color="default"
                  href="/Register"
                >
                  SingUp
                </Button>
              </Col>
              <Col className="mb-lg-auto sm-6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
