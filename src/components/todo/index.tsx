'use client'
import React, { useState } from 'react'
import ItemTodo from '../itemTodo'
import styles from './styles.module.scss'
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify'

type Props = {}

export default function Todo({}: Props) {
  const [value, setValue] = useState<string>('')
  const [listTodo, setListTodo] = useState<ITodo[]>([])

  const handleAdd = () => {
    if (value) {
      const defaultItem: ITodo = {
        name: value,
        status: false,
        id: new Date().getTime().toString(),
      }
      setListTodo(prev => [...prev, defaultItem])
      setValue('')
      toast.success('Add todo success')
      return
    }
    toast.error('Please enter your todo')
  }

  const handleDelete = (value: ITodo) => {
    setListTodo(prev => prev.filter(todo => todo.id !== value.id))
    toast.success('Delete todo success')
  }

  const handleUpdateComplete = (value: ITodo) => {
    setListTodo(prev => prev.map(todo => (todo.id === value.id ? { ...todo, status: !todo.status } : todo)))
    toast.success('Update todo success')
  }

  return (
    <section className={styles.todo}>
      <h1 className={styles.title}>List todo</h1>
      <div className={styles.addBox}>
        <input
          type='text'
          placeholder='Enter your todo'
          className={`${styles.input} form-control`}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className={styles.btnBox}>
          <Button className={styles.btnCus} onClick={handleAdd} variant='primary'>
            Add
          </Button>
        </div>
      </div>
      <ul className={styles.listTodo}>
        {listTodo &&
          listTodo.map(todo => (
            <ItemTodo
              handleUpdateComplete={handleUpdateComplete}
              handleDelete={handleDelete}
              key={todo.id}
              todo={todo}
            />
          ))}
      </ul>
    </section>
  )
}
