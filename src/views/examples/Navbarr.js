import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Dropdown,
} from "reactstrap";
import AppContext from "Context/AppContext";
import { history } from "../../history";
import gymxLogo from "../../assets/img/brand/gymx.jpeg";

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
            <NavLink to="/" className="navbar-brand ml-5">
              <img
                src={gymxLogo}
                class="d-inline-block align-center mb-2"
                alt="logo"
              />
              <span className="h3 text-bold text-white"> GYMX</span>
            </NavLink>
          </div>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <ReactBootStrap.Navbar.Collapse
            id="responsive-navbar-nav"
            className="mt-5 mt-lg-0"
          >
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
                <NavLink to="/Register" className="btn btn-neutral mr-2">
                  <span className="fa fa-user-plus mr-1" />
                  Register
                </NavLink>
                <NavLink to="/Login" className="btn btn-neutral">
                  <span className="fa fa-sign-in mr-1" />
                  Login
                </NavLink>
              </div>
            )}
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Navbarr;
