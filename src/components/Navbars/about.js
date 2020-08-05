import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "./about.css";
class About extends React.Component {
  state = {};

  render() {
    return (
      <>
        <section id="about" className="">
          <Container>
            <Row className=" justify-content-center text-center mb-lg">
              <Col lg="8">
                <h2 className="mt-6 display-3">About us</h2>
                <p className="lead">
                  <strong>
                    {" "}
                    A healthy gymnastic body not only reflects a great
                    personality but it also makes you stronger and keep fit. Gym
                    activities keep you away from laziness makes you active and
                    energetic whole day and enables you to perform various
                    tasks. One of the most common mental benefits of exercise is
                    stress relief and We provide best nutritionists ,trainer,
                    and coachs
                  </strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-lg-0" lg="3" md="6">
                <div className="mb-7 px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/a1.jpg")}
                    style={{ width: "300px", height: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">
                        Life Style Modification
                      </span>
                      <small className="h6 text-muted">Motivators</small>
                    </h5>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/bghome2.jpg")}
                    style={{ width: "300px", height: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Transformation</span>
                      <small className="h6 text-muted">Fitness Club</small>
                    </h5>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/a3.jpg")}
                    style={{ width: "300px", height: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Exercise Programming</span>
                      <small className="h6 text-muted">Diet Planners</small>
                    </h5>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/a4.jpg")}
                    style={{ width: "300px", height: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Collaboration</span>
                      <small className="h6 text-muted">Trainers</small>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default About;
