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
              setTodos={setTodos}
            />
          ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
