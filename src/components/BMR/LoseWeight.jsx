import React, { Component } from "react";
class LoseWeight extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="h6">
        {this.props.lose && (
          <span>
            Your Have to get to{" "}
            <span className="font-weight-bold">{this.props.lose}</span> calories
            in order to lose weight
          </span>
        )}
        {this.props.gain && (
          <span>
            Your Have to get to{" "}
            <span className="font-weight-bold">{this.props.gain}</span> calories
            in order to gain weight
          </span>
        )}
      </div>
    );
  }
}
export default LoseWeight;
