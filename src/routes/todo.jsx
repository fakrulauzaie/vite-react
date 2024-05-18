
import '../assets/App.css'
import { useSelector } from 'react-redux';
import TodoForm from '../components/todo/TodoForm';

function Todo() {
  const todos = useSelector(state => state.todo.todos);

  return (
    <>
    <div>
      <h1>Todo List</h1>
      <TodoForm/>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
      <p className="read-the-docs">
        Just a simple Todo list that saves locally.
      </p>
    </>
  )
}

export default Todo;