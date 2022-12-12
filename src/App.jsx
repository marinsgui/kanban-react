import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard/TaskCard'

import style from './components/TaskCard/taskcard.module.css';

function App() {

  const [newTask, setNewTask] = useState([])

  const addTask = () => {
    setNewTask(prevState => {
      return [...prevState, newTask]
    })
  }

  return (
    <div className="App">
      <TaskCard className={style.to_do} title='A fazer' onAddTask={addTask} task={newTask} />
      <TaskCard className={style.doing} title='Fazendo' />
      <TaskCard className={style.done} title='Feito' />
    </div>
  )
}

export default App
