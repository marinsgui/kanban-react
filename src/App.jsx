import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App">
      <div className="to-do">
        <h2>A fazer</h2>
        <button>Adicionar nova tarefa</button>
      </div>

      <div className="doing">
        <h2>Fazendo</h2>
        <button>Adicionar nova tarefa</button>
      </div>

      <div className="done">
        <h2>Feito</h2>
        <button>Adicionar nova tarefa</button>
      </div>
    </div>
  )
}

export default App
