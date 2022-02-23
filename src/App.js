// import './App.css';
import { useTodos } from './hooks/useTodos';

import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoList/components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/TodoButton';
import { Modal } from './Modal';
import { TodoForm } from './components/TodoForm';
import { TodoError } from './components/TodoError';
import { TodoLoading } from './components/TodoLoading';
import { TodoHeader } from './components/TodoHeader';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    openModal,
    handlerModal,
    totalTodos,
    completedTodos,
    addTodo
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {error && <TodoError error={error} />}
        {loading && new Array(4).fill().map((e, i) => <TodoLoading key={i} />)}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} handlerModal={handlerModal} />
        </Modal>
      )}
      <CreateTodoButton handlerModal={handlerModal} />
    </>
  );
}

export default App;
