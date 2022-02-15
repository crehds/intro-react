// import './App.css';

import { CreateTodoButton } from './components/TodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoList/components/TodoItem';
import { TodoSearch } from './components/TodoSearch';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar un curso en Platzi', completed: false },
  { text: 'Hacer ejercicio', completed: false }
];

function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, item) => (
          <TodoItem key={`Todo-${item}`} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </>
  );
}

export default App;
