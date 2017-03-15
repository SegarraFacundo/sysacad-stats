import React, { Component } from 'react'

class ExamenesListView extends Component {
  render () {
    console.log(this.props)
    const { examenes } = this.props
    return (
      <div>
        <ul>
          {examenes.map((examen) => <li key={`${examen.codigo}-${examen.fecha}`}>{examen.materia}: {examen.nota}</li>)}
        </ul>
      </div>
    )
  }
}

export default ExamenesListView
