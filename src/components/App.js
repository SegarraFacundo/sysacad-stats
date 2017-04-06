import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ExamenesListView from "./ExamenesListView";
import StatsView from "./StatsView";
import Login from "./Login";
import { getData } from "../data";

class App extends Component {
  constructor(props) {
    super(props);
    this.renderConDatosCargados = this.renderConDatosCargados.bind(this);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({ data });
    });
  }

  render() {
    if (this.state.data === null) {
      return <div>Cargando datos</div>;
    } else {
      return this.renderConDatosCargados();
    }
  }

  renderConDatosCargados() {
    const { data: { examenes, estado_academico } } = this.state;
    return (
      <div>
        <Router>
          <div>
            <Container>
              <Route path="/login" render={() => <Login />} />
              <Route
                path="/examenes"
                render={props => <ExamenesListView examenes={examenes} />}
              />
              <Route
                path="/estadisticas"
                render={() => (
                  <StatsView
                    examenes={examenes}
                    estado_academico={estado_academico}
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
