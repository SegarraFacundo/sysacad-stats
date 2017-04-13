import React, { Component } from "react";

class Progress extends Component {
  
  render() {
    const { estado_academico } = this.props;
    const total = estado_academico.length;
    const aprobadas = estado_academico
      .filter(m => m.estado === "APROBADA").length

    return (
      <div>
        { aprobadas / total * 100 }
      </div>
    );
  }
}

export default Progress;
