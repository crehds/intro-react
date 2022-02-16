// import './App.css';

import { useState } from 'react';
import { AppUI } from './pages/AppUI';

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

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
