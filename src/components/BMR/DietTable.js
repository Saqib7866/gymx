import React, { Component } from "react";
import { Table } from "reactstrap";
export default class DietTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Components</th>
            <th>Protiens</th>
            <th>Fats</th>
            <th>Carbs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Rice</td>
            <td></td>
            <td></td>
            <td>{this.props.rice}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Chicken</td>
            <td>{this.props.chicken}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Olive</td>
            <td></td>
            <td>{this.props.olive}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Egg</td>
            <td>{this.props.egg}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
