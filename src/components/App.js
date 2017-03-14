import React, { Component } from 'react'
import ExamenesListView from './ExamenesListView'

class App extends Component {
    render() {
      const { examenes } = this.props
        return (
          <div>
            <ExamenesListView examenes={examenes} />
          </div>
        );
    }
}

export default App;
