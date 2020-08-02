import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
} from "reactstrap";
import classnames from "classnames";
import { Settings, Lock, Info } from "react-feather";
import { Redirect } from "react-router-dom";

import GeneralTab from "./General";
import ChangePassword from "./ChangePassword";
import InfoTab from "./Info";

import "./account-settings.scss";

class AccountSettings extends React.Component {
  state = {
    activeTab: "1",
    windowWidth: null,
  };

  toggle = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  updateWidth = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    if (window !== undefined) {
      this.updateWidth();
      window.addEventListener("resize", this.updateWidth);
    }
  }

  render() {
    let { windowWidth } = this.state;
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) === null) {
      return <Redirect to="/Login" />;
    } else {
      return (
        <React.Fragment>
          <div
            className={`container mt-9 mb-9 ${
              windowWidth >= 769 ? "nav-vertical" : "account-setting-wrapper"
            }`}
          >
            <Nav className="account-settings-tab nav-left mr-0 mr-sm-3" tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1",
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  <Settings size={16} />
                  <span
                    className="d-md-inline-block d-none align-middle ml-1"
                    style={{ cursor: "pointer" }}
                  >
                    General
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2",
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  <Lock size={16} />
                  <span
                    className="d-md-inline-block d-none align-middle ml-1"
                    style={{ cursor: "pointer" }}
                  >
                    Change Password
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3",
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  <Info size={16} />
                  <span
                    className="d-md-inline-block d-none align-middle ml-1"
                    style={{ cursor: "pointer" }}
                  >
                    Info
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
            <Card>
              <CardBody>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <GeneralTab />
                  </TabPane>
                  <TabPane tabId="2">
                    <ChangePassword />
                  </TabPane>
                  <TabPane tabId="3">
                    <InfoTab />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default AccountSettings;
