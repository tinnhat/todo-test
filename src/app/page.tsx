import styles from './styles.module.scss'
import Todo from '@/components/todo'
export default function Home() {
  return (
    <main>
      <div className={styles.todoPage}>
        <Todo />
      </div>
    </main>
  )
}
