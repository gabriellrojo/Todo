import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './Form.module.css'
import { ITask } from '../interface/task'

type Props = {
    btnText: string
    taskList: Array<ITask>
    setTaskList: React.Dispatch<React.SetStateAction<Array<ITask>>>
    taskToUpdate?: ITask | null
    handleUpdate?: Function
}

const Form = ({btnText, taskList, setTaskList, taskToUpdate, handleUpdate}: Props) => {
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        if(handleUpdate){

            e.preventDefault()
            const updatedTask = {
                id: id,
                task: title,
                difficulty: difficulty
            }

            handleUpdate(updatedTask)

        } else {

            e.preventDefault()
            const id = Math.floor(Math.random()*100)
        
            const task: ITask = {
                id: id,
                task: title,
                difficulty: difficulty
            }

            setTaskList([...taskList, task])

        }
        
       
    }
    
    useEffect(() => {
        if(taskToUpdate){
            setId(taskToUpdate.id)
            setTitle(taskToUpdate.task)
            setDifficulty(taskToUpdate.difficulty)
        }
    },[taskToUpdate])
    return (
    <div>
        <form onSubmit={handleSumbit} className={styles.form}>
            <label className={styles.title}>
                Título:
                <input className={styles.input} type="text" placeholder='Digite a sua tarefa' onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} value={title}/>
            </label>
            <label className={styles.title}>
                Dificuldade:
                <input className={styles.input} type="text" placeholder='Digite o grau de dificuldade' onChange={(e: ChangeEvent<HTMLInputElement>) => setDifficulty(parseInt(e.target.value))} value={difficulty}/>
            </label>
            <input className="btn" type="submit" value={btnText}/>
        </form>
    </div>
  )
}

export default Form