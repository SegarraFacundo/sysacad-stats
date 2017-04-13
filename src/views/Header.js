import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Header extends Component {

  render() {

    return (
      <div>
        <Menu inverted color="blue" size="huge">
          <Menu.Item
            as={Link} 
            to='/examenes'  
          >Examenes</Menu.Item>
          <Menu.Item
            as={Link} 
            to='/estadisticas'
          >Estadisticas</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name="Salir"
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
