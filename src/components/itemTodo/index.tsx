'use client'
import React from 'react'
import Button from 'react-bootstrap/Button'
import styles from './styles.module.scss'

type Props = {
  todo: ITodo
  handleUpdateComplete: (value: ITodo) => void
  handleDelete: (value: ITodo) => void

}

export default function ItemTodo({ todo, handleUpdateComplete, handleDelete }: Props) {
  return (
    <li className={`${styles.todoItem} ${todo.status ? styles.completeTodo : ''}`}>
      <div className={`form-check ${styles.formCheck}`}>
        <input
          className={`form-check-input ${todo.status ? styles.completeCheckbox : ''}`}
          type='checkbox'
          value={todo.name}
          onChange={() => handleUpdateComplete(todo)}
          checked={todo.status}
        />
        <label className={`form-check-label ${styles.labelTodo}`} onClick={() => handleUpdateComplete(todo)}>{todo.name}</label>
      </div>
      <div className={styles.actionBox}>
        <Button className={styles.deleteBtn} onClick={() => handleDelete(todo)} variant='danger'>
          Delete
        </Button>
      </div>
    </li>
  )
}
