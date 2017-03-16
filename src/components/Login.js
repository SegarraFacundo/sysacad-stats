import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { withRouter } from "react-router";

class Login extends Component {

    handleItemClick = (path) => this.props.history.push(path)

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Legajo</label>
          <input placeholder="Legajo" />
        </Form.Field>
        <Form.Field>
          <label>Contraseña</label>
          <input placeholder="Contraseña" />
        </Form.Field>
        <Button 
        type="submit"
        onClick={() => this.handleItemClick("/estadisticas")}
        >
            Iniciar sesión
        </Button>
      </Form>
    );
  }
}

export default withRouter(Login);
