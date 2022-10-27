import React from 'react'
import { ITask } from '../interface/task'
import styles from './TaskList.module.css'
import { useState } from 'react'

type Props = {
    taskList: Array<ITask>
    handleDelete: Function
    showModal: Function
}

const TaskList = ({taskList, handleDelete, showModal}: Props) => {
  return (
    <div>
        {taskList.length > 0 ? 
        (taskList.map(task => (
            <div key={task.id} className={styles.containerTasks}>
              <div className={styles.containerTitle}>
                <h2 className={styles.title}>{task.task}</h2>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.icons}>
                <i className="bi bi-pencil" onClick={() => showModal(task)}></i>
                <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
              </div>
            </div>
        ))) 
        : 
        (<p className={styles.message}>Não há tarefas cadastradas</p>)}
    </div>
  )
}

export default TaskList