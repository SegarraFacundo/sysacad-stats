import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Examenes from "./Examenes";
import Stats from "./Stats";

export default class Layout extends Component {

  render() {

    const data = this.props.data;

    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route path="/examenes" render={ (props) => <Examenes examenes={data.examenes} {...props} />} />
            <Route path="/estadisticas" render={ (props) => <Stats data={data} {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}