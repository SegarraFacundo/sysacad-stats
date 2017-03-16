import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { withRouter } from "react-router";

class Header extends Component {

  handleItemClick = (path) => this.props.history.push(path)

  render() {
    const { location } = this.props;

    console.log(this.props);
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="Examenes"
            active={location.pathname === "/examenes"}
            onClick={() => this.handleItemClick("/examenes")}
          />
          <Menu.Item
            name="Estadisticas"
            active={location.pathname === "/estadisticas"}
            onClick={() => this.handleItemClick("/estadisticas")}
          />
          <Menu.Menu position='right'>
            <Menu.Item name='Cerrar Sesión' active={location.pathname === 'logout'} onClick={() => this.handleItemClick("/login")} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Header);
