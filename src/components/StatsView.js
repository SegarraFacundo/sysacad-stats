import React, { Component } from 'react'
import Progress from './Progress'

class StatsView extends Component {
  render () {
    const { estadoAcademico } = this.props
    return (
      <div>
        <Progress estadoAcademico={estadoAcademico} />
      </div>
    )
  }
}

export default StatsView
