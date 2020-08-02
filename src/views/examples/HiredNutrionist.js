import React, { Component } from "react";
import { Row, Col } from "reactstrap";
class HNuts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Row className="mt-6">
          <Col sm="12" className="text-center">
            <h1>Hired Nutritionists</h1>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default HNuts;
