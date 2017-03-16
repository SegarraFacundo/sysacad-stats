import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import Header from "./Header";

class ExamenesListView extends Component {
  render() {
    const { examenes } = this.props;
    return (
      <div>
        <Header />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Código</Table.HeaderCell>
              <Table.HeaderCell>Materia</Table.HeaderCell>
              <Table.HeaderCell>Nota</Table.HeaderCell>
              <Table.HeaderCell>Fecha</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {examenes.map(ex => (
              <Table.Row>
                <Table.Cell>{ ex.codigo }</Table.Cell>
                <Table.Cell>{ ex.materia }</Table.Cell>
                <Table.Cell>{ ex.nota }</Table.Cell>
                <Table.Cell>{ ex.fecha }</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default ExamenesListView;
