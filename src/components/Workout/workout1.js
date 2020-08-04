import React, { Component } from "react";
import Table1 from "./table1.js";
import Table2 from "./table2.js";
import { Button, Row, Col } from "reactstrap";

class Workout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      opened1: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
    this.toggleBox1 = this.toggleBox1.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
      opened1: false,
    });
  }
  toggleBox1() {
    const { opened1 } = this.state;
    this.setState({
      opened1: !opened1,
      opened: false,
    });
  }
  render() {
    var { title, Component } = this.props;
    const { opened } = this.state;
    const { opened1 } = this.state;

    return (
      <div className="box mb-5">
        <Row>
          <Col md="6">
            <Button
              className="boxTitle"
              onClick={this.toggleBox}
              id="gain"
              style={{ float: "right", marginTop: "20px" }}
              color="warning"
              outline
              type="button"
            >
              <strong style={{ fontWeight: "15px" }}>Weight Gain </strong>
            </Button>
            {opened && <div class="boxContent">{<Table1 />}</div>}
          </Col>

          <Col md="6">
            <Button
              className="boxTitle"
              onClick={this.toggleBox1}
              style={{ marginTop: "20px" }}
              color="warning"
              outline
              type="button"
            >
              <strong style={{ fontWeight: "15px" }}>Muscle Building </strong>
            </Button>
            {opened1 && <div class="boxContent">{<Table2 />}</div>}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Workout1;
