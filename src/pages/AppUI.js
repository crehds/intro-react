import { useContext } from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoList/components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/TodoButton';
import { Context } from '../context';

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    useContext(Context);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes</p>}
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

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
