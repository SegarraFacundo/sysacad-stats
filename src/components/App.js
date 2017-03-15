import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ExamenesListView from './ExamenesListView'
import StatsView from './StatsView'

class App extends Component {
    render() {
      const { examenes } = this.props
        return (
          <Router>
            <div>
              <Route path='/examenes' render={(props) => <ExamenesListView examenes={examenes} />} />
              <Route path='/estadisticas' render={() => <StatsView examenes={examenes} />} />
            </div>
          </Router>
        );
    }
}

export default App;
