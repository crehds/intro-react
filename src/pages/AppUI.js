import { useContext } from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoList/components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/TodoButton';
import { Context } from '../context';
import { Modal } from '../Modal';
import { TodoForm } from '../components/TodoForm';
import { TodoError } from '../components/TodoError';
import { TodoLoading } from '../components/TodoLoading';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    handlerModal
  } = useContext(Context);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

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
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton handlerModal={handlerModal} />
    </>
  );
}

export { AppUI };
