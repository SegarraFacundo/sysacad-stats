import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class Login extends Component {

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
        >
          Iniciar sesión
        </Button>
      </Form>
    );
  }
}
