import React, { Component } from 'react'

class ExamenesListView extends Component {
  render () {
    const { examenes } = this.props
    return (
      <div>
        <ul>
          {examenes.map((examen) => <li>{examen.materia}: {examen.nota}</li>)}
        </ul>
      </div>
    )
  }
}

export default ExamenesListView
