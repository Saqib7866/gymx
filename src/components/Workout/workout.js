import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";
import "./workout.css";
// reactstrap components
import {
  Table,
  Button,
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
import background from "../../assets/img/theme/bghome2.jpg";

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  render() {
    var { title, children } = this.props;
    const { opened } = this.state;

    return (
      <div className="box  mt-n5 mb-5 back23">
        <div className="boxTitle container " onClick={this.toggleBox}>
          <Button
            style={{
              textAlign: "center",
              marginLeft: "430px",
              marginTop: "110px",
            }}
            color="warning"
            outline
            type="button"
          >
            <strong style={{ fontWeight: "15px" }}>Workout</strong>
          </Button>
        </div>
        {opened && <div class="boxContent mb-5">{children}</div>}
      </div>
    );
  }
}

export default Workout;
