import React, { Component } from "react";
import Progress from "../components/Progress";

class Stats extends Component {
  render() {
    const { estado_academico } = this.props.data;
    return (
      <div>
        <Progress estado_academico={estado_academico} />
      </div>
    );
  }
}

export default Stats;
