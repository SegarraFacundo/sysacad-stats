import React, { Component } from 'react'
import './App.css'
import { Button } from 'semantic-ui-react'

function handleSubmit(event) {
    alert('A name was submitted: ');
    event.preventDefault();
}

const ButtonExampleEmphasis = () => (
    <div>
        <Button primary onClick={ handleSubmit }>Primary</Button>
        <Button secondary>Secondary</Button>
    </div>
)

class App extends Component {
    render() {
        return (
            <ButtonExampleEmphasis />
        );
    }
}

export default App;