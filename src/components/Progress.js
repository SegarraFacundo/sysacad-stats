import React, { Component } from "react";

class Progress extends Component {
  render() {
    const { estadoAcademico } = this.props;
    const total = estadoAcademico.materias.length;
    const aprobadas = estadoAcademico.materias.filter(
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
