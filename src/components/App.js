import React, { Component } from "react";
import { Message, Container, Dimmer, Loader, Segment } from "semantic-ui-react";
import getData from "../data";
import Router from "./Router";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
      error: false
    };
  }

  componentWillMount() {
    const localData = localStorage.getItem("data");
    if (localData !== null) {
      this.setState({ data: JSON.parse(localData) });
    }
  }

  render() {
    const loading = this.state.loading
      ? 
        <Message>        
          <Dimmer active inverted>
            <Loader size="mini">Actualizando datos</Loader>
          </Dimmer>
        </Message>
      : 
        null;

    const data = this.state.data;

    return (
      <Container fluid>
        <Segment.Group>
          {loading}
          <Segment>
            <Router data={data} />
          </Segment>
        </Segment.Group>
      </Container>
    );
  }

  componentDidMount() {
    getData()
      .then(data => {
        if (data) {
          const today = new Date();
          this.setState({ data, loading: false });
          localStorage.setItem("data", JSON.stringify(data));
          localStorage.setItem("update", today.toString());
        } else {
          this.setState({ error: true, loading: false });
        }
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
  }
}

export default App;
