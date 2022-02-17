// import './App.css';

import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AppUI } from './pages/AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar un curso en Platzi', completed: false },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'LALALALA', completed: false }
// ];

function App() {
  const {
    storedValue: todos,
    setLocalStorage: setTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const updateTodos = todos.slice();
    const updateTodo = updateTodos.find((todo) => todo.text === text);

    updateTodo.completed = !updateTodo.completed;

    setTodos(updateTodos);
  };

  const deleteTodo = (text) => {
    const deleteTodos = [...todos].filter((todo) => todo.text !== text);
    setTodos(deleteTodos);
  };

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <AppUI
      loading={loading}
      error={error}
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
