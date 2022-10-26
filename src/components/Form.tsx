import React from 'react'
import styles from './Form.module.css'

type Props = {
    btnText: string
}

const Form = ({btnText}: Props) => {
  return (
    <div>
        <form className={styles.form}>
            <label className={styles.title}>
                Título:
                <input className={styles.input} type="text" placeholder='Digite a sua tarefa'/>
            </label>
            <label className={styles.title}>
                Dificuldade:
                <input className={styles.input} type="text" placeholder='Digite o grau de dificuldade'/>
            </label>
            <input className="btn" type="submit" value={btnText}/>
        </form>
    </div>
  )
}

export default Form