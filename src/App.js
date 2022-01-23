import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      input: ""
    }

    this.updateInput = this.updateInput.bind(this)
    this.anadeTarea = this.anadeTarea.bind(this)
  }
  updateInput(e) {
    this.setState({ input: e.target.value })
  }
  anadeTarea(e) {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(this.state.input),
      input: ""
    });
  }
  render() {
    const { items, input } = this.state
    return (
      <div className="wrapper">

        <h3>Por hacer:</h3>
        <ul className="todo">
          {items.map((item, index) =>
            <li key={index}>{item}</li>)}
        </ul>
        <form onSubmit={this.anadeTarea}>
          <input type="text" id="new-task"
            value={input}
            onChange={this.updateInput}
            placeholder="Ingresa una tarea y oprime Enter" />
        </form>


      </div>
    )
  }
}


export default App;
