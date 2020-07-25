import React, { Component } from "react";
import {
  Table,
  Button,
  PopoverBody,
  UncontrolledPopover,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Table2 extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover style={{ color: "white" }}>
          <thead>
            <tr>
              <th>#</th>
              <th colSpan="3">Exercies</th>
              <th colSpan="2">Sets</th>
              <th colSpan="2">Sample</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">1</td>
              <td colSpan="2">Bench Press</td>
              <td colSpan="2">2 sets 4-6 reps</td>
              <td colSpan="2">
                {" "}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/bp.gif")}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">2</td>
              <td colSpan="2">Military Press</td>
              <td colSpan="2">2 sets 4-6 reps</td>
              <td colSpan="2">
                {" "}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/military.gif")}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">3</td>
              <td colSpan="2">Barbell Curl</td>
              <td colSpan="2">2 sets 4-6 reps</td>
              <td colSpan="2">
                {" "}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/barbell.gif")}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2"> 4</td>
              <td colSpan="2">Leg Press</td>
              <td colSpan="2">2 sets 4-6 reps</td>
              <td colSpan="2">
                {" "}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/legpress.gif")}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">5</td>
              <td colSpan="2">Dead Lift</td>
              <td colSpan="2">2 sets 4-6 reps</td>
              <td colSpan="2">
                {" "}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/deadlift.gif")}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">6</td>
              <td colSpan="2">Closegrip Benchpress</td>
              <td colSpan="2">2 sets 4-6 reps</td>
              <td colSpan="2">
                {" "}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/close.gif")}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div>
          <p style={{ color: "white" }}>
            Use heavy weight and 2-3min in each set
          </p>
        </div>
      </div>
    );
  }
}

export default Table2;
