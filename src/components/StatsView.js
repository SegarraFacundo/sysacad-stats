import React, { Component } from 'react'
import Progress from './Progress'
import Header from "./Header";

class StatsView extends Component {
  render () {
    const { estado_academico } = this.props
    return (
      <div>
        <Header />
        <Progress estado_academico={estado_academico} />
      </div>
    )
  }
}

export default StatsView
