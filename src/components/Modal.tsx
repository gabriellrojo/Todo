import React, { ReactNode } from 'react'
import styles from './Modal.module.css'
import { ITask } from '../interface/task'

type Props = {
    form: React.ReactNode 
}

const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal?.classList.add("hide")
}

const Modal = ({form}: Props) => {
  return (
    <div id="modal" className="hide">
        <div className={styles.background} onClick={closeModal}></div>
        <div className={styles.container}>
            {form}
        </div>
    </div>
  )
}

export default Modal