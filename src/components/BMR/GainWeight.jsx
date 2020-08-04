import React, { Component } from "react";
class GainWeight extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <h6>
        <strong>
          Your Have to get to {this.props.gain} calories in order to loose
          weight
        </strong>
      </h6>
    );
  }
}
export default GainWeight;
