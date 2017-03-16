import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ExamenesListView from "./ExamenesListView";
import StatsView from "./StatsView";
import Login from "./Login";

class App extends Component {
  render() {
    const { examenes, estadoAcademico } = this.props;
    return (
      <div>
        <Router>
          <div>
            <Container>
              <Route
                path="/login"
                render={() => (
                  <Login />
                )}
              />
              <Route
                path="/examenes"
                render={props => <ExamenesListView examenes={examenes} />}
              />
              <Route
                path="/estadisticas"
                render={() => (
                  <StatsView
                    examenes={examenes}
                    estadoAcademico={estadoAcademico}
                  />
                )}
              />
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
