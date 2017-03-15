import React, { Component } from "react";

class Progress extends Component {
  render() {
    const { examenes } = this.props;
    const cantidadExamenes = examenes.length;
    return (
      <div>
        {cantidadExamenes}
      </div>
    );
  }
}

export default Progress;
