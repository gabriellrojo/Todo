import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import { ITask } from './interface/task'
import { useState } from 'react'


function App() {
  const [taskList, setTaskList] = useState<Array<ITask>>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
  
  
  const deleteTask = (id: number) => {
   setTaskList(taskList.filter(task => task.id !== id ))
  }

  const showModal = (task: ITask) => {
    const modal = document.querySelector("#modal")
    modal?.classList.remove("hide")
    setTaskToUpdate(task)
  }

  const updateTask = (updatedTask: ITask) => {
    
    const updateTaskObj: ITask = updatedTask
    const modal = document.querySelector("#modal")
    
    const newTasks = taskList.map(task => {
      return updateTaskObj.id === task.id ? updateTaskObj : task})
    
    setTaskList(newTasks)
    modal?.classList.add("hide")
  }

  
  return (
    <div>
      <Modal form={<Form btnText="Editar" taskList={taskList} setTaskList={setTaskList} taskToUpdate={taskToUpdate} handleUpdate={updateTask}/>}/>
      <Header/>
      <div className="container">
        <h2>O que você vai fazer?</h2>
        <Form btnText="Criar Tarfefa" taskList={taskList} setTaskList={setTaskList} />
        <h2>Suas Tarefas:</h2>
        <TaskList taskList={taskList} handleDelete={deleteTask} showModal={showModal}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
