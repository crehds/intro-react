import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoList/components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/TodoButton';

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
