// import './App.css';

import { useState } from 'react';
import { CreateTodoButton } from './components/TodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoList/components/TodoItem';
import { TodoSearch } from './components/TodoSearch';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar un curso en Platzi', completed: false },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'LALALALA', completed: false }
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const updateTodos = defaultTodos.slice();
    const updateTodo = updateTodos.find((todo) => todo.text === text);

    updateTodo.completed = !updateTodo.completed;

    setTodos(updateTodos);
  };

  const deleteTodo = (text) => {
    const deleteTodos = [...defaultTodos].filter((todo) => todo.text !== text);
    setTodos(deleteTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((todo, item) => (
            <TodoItem
              key={`Todo-${item}`}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              setTodos={setTodos}
            />
          ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
