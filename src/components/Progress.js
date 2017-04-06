import React, { Component } from "react";

class Progress extends Component {
  render() {
    const { estado_academico } = this.props;
    const total = estado_academico.materias.length;
    const aprobadas = estado_academico.materias.filter(
      m => m.estado.estado === "aprobada"
    )
    .filter(m => !m.nombre.includes('(Elec.)'))
    .length;
    console.log(`Total: ${total}`)
    return (
      <div>
        { aprobadas / total * 100}
      </div>
    );
  }
}

export default Progress;
