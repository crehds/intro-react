// import './App.css';
import { Provider } from './context';
import { AppUI } from './pages/AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar un curso en Platzi', completed: false },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'LALALALA', completed: false }
// ];

function App() {
  return (
    <Provider>
      <AppUI />
    </Provider>
  );
}

export default App;
