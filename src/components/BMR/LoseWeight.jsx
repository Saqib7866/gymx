import React, { Component } from "react";
class LoseWeight extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <h6>
        <strong>
          Your Have to get to {this.props.lose} calories in order to loose
          weight
        </strong>
      </h6>
    );
  }
}
export default LoseWeight;
