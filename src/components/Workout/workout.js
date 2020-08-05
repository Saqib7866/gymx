import React from "react";
import "./workout.css";
// reactstrap components
import { Button } from "reactstrap";

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
