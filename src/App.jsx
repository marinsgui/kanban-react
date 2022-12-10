import { useState } from 'react'
import './App.css'

import Popup from './components/Popup';

function App() {

  const [todoItem, setTodoItem] = useState([])
  const [doingItem, setDoingItem] = useState([])
  const [doneItem, setDoneItem] = useState([])

  function addTodo(e) {
    e.preventDefault()
    
  }

  return (
    <div className="App">
      <div className="to-do">
        <h2>A fazer</h2>
        <button className='todo-btn' onClick={addTodo}>Adicionar nova tarefa</button>
      </div>

      <div className="doing">
        <h2>Fazendo</h2>
        <button className='doing-btn'>Adicionar nova tarefa</button>
      </div>

      <div className="done">
        <h2>Feito</h2>
        <button className='done-btn'>Adicionar nova tarefa</button>
      </div>
    </div>
  )
}

export default App
