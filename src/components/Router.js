import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "../views/Layout";
import Login from "../views/Login";

class Router extends Component {

  render() {
    
    const data = this.props.data;

    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" render={ (props) => <Layout data={data} {...props} />} />
            <Route exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;