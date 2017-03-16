import React, { Component } from 'react'
import Progress from './Progress'
import Header from "./Header";

class StatsView extends Component {
  render () {
    const { estadoAcademico } = this.props
    return (
      <div>
        <Header />
        <Progress estadoAcademico={estadoAcademico} />
      </div>
    )
  }
}

export default StatsView
