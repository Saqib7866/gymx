import React, { Component } from "react";
import {
  Table
} from "reactstrap";



class Table1 extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover style={{ color: "white" }}>
          <thead>
            <tr>
              <th>#</th>
              <th colSpan="3">
                {" "}
                <strong style={{ fontWeight: "15px" }}>Exercies</strong>
              </th>
              <th colSpan="2">
                <strong style={{ fontWeight: "15px" }}>Sets</strong>
              </th>
              <th colSpan="2">
                {" "}
                <strong style={{ fontWeight: "15px" }}> Sample</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2"> 1</td>
              <td colSpan="2">Bench Press</td>
              <td colSpan="2">4sets 12-15reps</td>
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
              <td colSpan="2">4sets 12-15reps</td>
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
              <td colSpan="2">Bentover Barbell row</td>
              <td colSpan="2">4sets 12-15reps</td>
              <td colSpan="2">
                {" "}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/bentover.gif")}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2"> 4</td>
              <td colSpan="2">Leg Press</td>
              <td colSpan="2">4sets 12-15reps</td>
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
              <td colSpan="2">Running</td>
              <td colSpan="2">20min</td>
              <td colSpan="2">
                {" "}
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  src={require("../../assets/img/theme/running.gif")}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div style={{ color: "white" }}>
          Increase the intensity of workout on daily basis
        </div>
      </div>
    );
  }
}

export default Table1;
