import React, { Component } from 'react'
import Progress from './Progress'

class StatsView extends Component {
  render () {
    const { examenes } = this.props
    return (
      <div>
        <Progress examenes={examenes} />
      </div>
    )
  }
}

export default StatsView
