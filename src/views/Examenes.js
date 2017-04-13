import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export default class Examenes extends Component {
  render() {

    const { examenes } = this.props;

    const content = examenes.map( (ex) => {
      return (
        <Table.Row key={ex.fecha} >
          <Table.Cell>{ ex.materia }</Table.Cell>
          <Table.Cell>{ ex.nota ? ex.nota : "Aus." }</Table.Cell>
          <Table.Cell>{ ex.fecha }</Table.Cell>
        </Table.Row>
      )
    })

    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Materia</Table.HeaderCell>
              <Table.HeaderCell>Nota</Table.HeaderCell>
              <Table.HeaderCell>Fecha</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
              { content }
          </Table.Body>
        </Table>
      </div>
    );
  }
}
