import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import "./Navbarr.css";
import * as ReactBootStrap from "react-bootstrap";
import {
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavItem,
  Dropdown,
} from "reactstrap";
import AppContext from "Context/AppContext";
import { history } from "../../history";
class Navbarr extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);

    this.state = { dropdownOpen: false };
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

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
                <NavLink to="/" className="nav-link">
                  <strong>Home</strong>
                </NavLink>

                <ReactBootStrap.NavDropdown
                  className="portfolio-nav"
                  title="Services"
                  id="collasible-nav-dropdown"
                >
                  <NavLink to="/BuyProducts" className="dropdown-item">
                    <strong>Buy Products</strong>
                  </NavLink>
                  <NavLink to="/BookNutrionist" className="dropdown-item">
                    <strong>Book Nutrionist Appointment</strong>
                  </NavLink>
                  <NavLink to="/BMR/BMI" className="dropdown-item">
                    <strong>BMR/BMI</strong>
                  </NavLink>
                </ReactBootStrap.NavDropdown>

                <ReactBootStrap.Nav.Link href="#about">
                  <strong>About</strong>
                </ReactBootStrap.Nav.Link>

                <ReactBootStrap.Nav.Link href="#ContactUs">
                  <strong>Contact</strong>
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </div>

            {localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) !==
              null && (
              <div className="ml-auto mr-3">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret className="p-1 px-3">
                    <i
                      className="fa fa-user-circle-o"
                      style={{ fontSize: 20 }}
                    />{" "}
                    {this.context.user.name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="p-1 px-3">
                      <i class="fa fa-cogs" />
                      Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      className="p-1 px-3"
                      onClick={() => {
                        localStorage.removeItem(
                          process.env.REACT_APP_TOKEN_NAME
                        );
                        this.context.setUser({});
                        history.push("/");
                      }}
                    >
                      <i className="fa fa-sign-out" />
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            )}

            {localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) ===
              null && (
              <div className="row ml-auto mr-3">
                <div>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button className="btn-neutral btn-icon" color="default">
                      <span className="btn-inner--icon">
                        <i className="fa fa-user-plus mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        <NavLink to="/Register" className="Reister">
                          Register
                        </NavLink>
                      </span>
                    </Button>
                  </NavItem>
                </div>
                <div>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="/Login"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-sign-in mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        <NavLink to="/Login" className="Login">
                          Login
                        </NavLink>
                      </span>
                    </Button>
                  </NavItem>
                </div>
              </div>
            )}
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Navbarr;
