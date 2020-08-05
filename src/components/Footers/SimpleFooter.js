import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center  ">
              <Col lg="6">
                <h4 className=" text-primary font-weight-light mb-2 ml-n7 ">
                  Thank you for supporting us!
                </h4>
                <h5 className="font-weight-light ml-n7">
                  The last three or four reps is what makes the muscle grow. ...
                </h5>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col sm="6">
                <div className=" copyright">
                  {new Date().getFullYear()}
                  <a href="" target="">
                    Copy Rights Reserved By GYMx
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink to="" className="">
                      Contact US
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="" className="">
                      About Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
