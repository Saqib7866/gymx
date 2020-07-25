import React, { Component } from "react";
import "./Navbarr.css";
import * as ReactBootStrap from "react-bootstrap";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
class Navbarr extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <ReactBootStrap.Navbar
          className="mainClass"
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <div className="miniClass1">
            <ReactBootStrap.Navbar.Brand href="/">
              <h3>
                <strong className="ml-5" style={{ color: "white" }}>
                  <b>GYMx</b>
                </strong>
              </h3>
            </ReactBootStrap.Navbar.Brand>
          </div>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <div className="miniClass2  ">
              <ReactBootStrap.Nav className="toggleClass ">
                <ReactBootStrap.Nav.Link href="/">
                  <strong>Home</strong>
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#about">
                  <strong> About</strong>
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown
                  className="portfolio-nav"
                  title="Services"
                  id="collasible-nav-dropdown"
                >
                  <ReactBootStrap.NavDropdown.Item href="/BuyProducts">
                    <strong> Buy Products</strong>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="/BookNutrionist">
                    <strong> Book Nutrionist Appointment</strong>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="BMR/BMI">
                    <strong>BMR/BMI</strong>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                </ReactBootStrap.NavDropdown>
                <ReactBootStrap.Nav.Link href="#ContactUs">
                  <strong> Contact</strong>
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </div>

            <div className="miniclass3">
              <NavItem className="d-none d-lg-block ml-lg-4">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="/Register"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-user-plus mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Register</span>
                </Button>
              </NavItem>
            </div>
            <div>
              <NavItem className="d-none d-lg-block ml-lg-4">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="/Login  "
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-sign-in mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Login</span>
                </Button>
              </NavItem>
            </div>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Navbarr;
