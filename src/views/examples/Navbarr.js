import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Dropdown,
  Media,
} from "reactstrap";
import AppContext from "Context/AppContext";
import { history } from "../../history";
import gymxLogo from "../../assets/img/brand/gymx.jpeg";
import noimage from "../../assets/img/user/no-image.png";

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
                className="d-inline-block align-center mb-2"
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
                  <NavLink to="/buy-products" className="dropdown-item">
                    <strong>Buy Products</strong>
                  </NavLink>
                  <NavLink to="/book-nutrionist" className="dropdown-item">
                    <strong>Book Nutrionist Appointment</strong>
                  </NavLink>
                  <NavLink to="/bmr-bmi" className="dropdown-item">
                    <strong>BMR/BMI</strong>
                  </NavLink>
                </ReactBootStrap.NavDropdown>

                <NavLink to="/diet-plan" className="nav-link">
                  <strong>Diet Plan</strong>
                </NavLink>

                <ReactBootStrap.Nav.Link href="/#about">
                  <strong>About</strong>
                </ReactBootStrap.Nav.Link>

                <ReactBootStrap.Nav.Link href="/#ContactUs">
                  <strong>Contact Us</strong>
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </div>

            {localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) !==
              null && (
              <div className="ml-auto mr-3">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret className="p-1 px-3">
                    <Media
                      className="rounded-circle"
                      object
                      src={
                        this.context.user.image
                          ? process.env.REACT_APP_API_URL +
                            this.context.user.image.formats.thumbnail.url
                          : noimage
                      }
                      alt="User"
                      height="25"
                      width="25"
                    />{" "}
                    {this.context.user.name}
                  </DropdownToggle>
                  <AppContext.Consumer>
                    {(c) => {
                      if (!c.loading && c.user.user_type) {
                        return (
                          <DropdownMenu right>
                            <NavLink
                              to={
                                c.user.user_type.name === "Member"
                                  ? "/user-dashboard"
                                  : "/nutritionist-dashboard"
                              }
                            >
                              <DropdownItem className="p-1 px-3">
                                <i className="fa fa-tachometer" />
                                Dashboard
                              </DropdownItem>
                            </NavLink>
                            <NavLink to="/account-settings">
                              <DropdownItem className="p-1 px-3">
                                <i className="fa fa-cogs" />
                                Settings
                              </DropdownItem>
                            </NavLink>
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
                        );
                      }
                    }}
                  </AppContext.Consumer>
                </Dropdown>
              </div>
            )}

            {localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) ===
              null && (
              <div className="row ml-auto mr-3">
                <NavLink to="/register" className="btn btn-neutral mr-2">
                  <span className="fa fa-user-plus mr-1" />
                  Register
                </NavLink>
                <NavLink to="/login" className="btn btn-neutral">
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
