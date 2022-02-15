// import './App.css';

import { CreateTodoButton } from './components/TodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoList/components/TodoItem';
import { TodoSearch } from './components/TodoSearch';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar un curso en Platzi', completed: true },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'LALALALA', completed: false }
];

function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, item) => (
          <TodoItem
            key={`Todo-${item}`}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
