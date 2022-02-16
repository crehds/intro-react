// import './App.css';

import { useState } from 'react';
import { AppUI } from './pages/AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar un curso en Platzi', completed: false },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'LALALALA', completed: false }
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const updateTodos = todos.slice();
    const updateTodo = updateTodos.find((todo) => todo.text === text);

    updateTodo.completed = !updateTodo.completed;

    saveTodos(updateTodos);
  };

  const deleteTodo = (text) => {
    const deleteTodos = [...todos].filter((todo) => todo.text !== text);
    saveTodos(deleteTodos);
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
