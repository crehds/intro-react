import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Context = createContext();

export const Provider = ({ children }) => {
  const {
    storedValue: todos,
    setLocalStorage,
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

    setLocalStorage(updateTodos);
  };

  const deleteTodo = (text) => {
    const deleteTodos = [...todos].filter((todo) => todo.text !== text);
    setLocalStorage(deleteTodos);
  };

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Context.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
      }}
    >
      {children}
    </Context.Provider>
  );
};
