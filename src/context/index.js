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
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    setLocalStorage(newTodos);
  };

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

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

  const handlerModal = () => {
    const button = document.querySelector('.CreateTodoButton');
    if (button.classList.contains('active')) {
      button.classList.remove('active');
    } else {
      button.classList.add('active');
    }
    setOpenModal((prevState) => !prevState);
  };

  return (
    <Context.Provider
      value={{
        loading,
        error,
        openModal,
        handlerModal,
        totalTodos,
        completedTodos,
        addTodo,
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
