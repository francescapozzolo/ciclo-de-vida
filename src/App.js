import './App.css'
import React from 'react'
import Cmpt1 from './Cmpt1'
import Cmpt2 from './Cmpt2'

class App extends React.Component {
  state = {
    visibleCmpt1: false,
    texto: 'Yo soy el texto inicial',
    numero: 1
  }
  render() {
    return (
      <div className="app">
        <button onClick={() => this.setState({visibleCmpt1: !this.state.visibleCmpt1})}>
          {this.state.visibleCmpt1 ? 'Ocultar' : 'Mostrar'}
        </button>
        <button onClick={() => this.setState({texto: 'Yo soy pedro'})}>
          Modificar Texto
        </button>
        <button onClick={() => this.setState({
          numero: 4
        })}>Cambiar Numero</button>
        {this.state.visibleCmpt1 && <Cmpt1 texto={this.state.texto} />}
        
        <Cmpt2 />
      </div>
    )
  }
}

export default App
