import { useState } from "react"


function TodoList(){

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addNewTask = () => {

    if(newTask === "" || null) {
      
      return alert("Campo tarefa não pode ser vazio");
    }

    setTasks([...tasks, {id: Math.random() * 120, title: newTask}]);
    setNewTask('')
  }

  const delTask = (id) => {
    setTasks(tasks.filter(tasks => tasks.id !== id));
  }

  const delAll = () => {
    setTasks([]);
  }

  return(
    <>
    <h1>Todo List</h1>
    <div className="todo-list">
      <input type="text" 
      placeholder="Digite aqui"
      value={newTask}
      onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={addNewTask}>Enviar</button>
      <button onClick={delAll}>Deletar todos</button>    
      </div>
    <div className="todo-items">
    <ul>
      {tasks.map(tasks => (
        <li key={tasks.id}>
          {tasks.title}
          
          <button onClick={() => delTask(tasks.id)}>
            Del
          </button>          
        </li>    
      ))}
    </ul>
    </div>    
    </>
  )
}

export default TodoList