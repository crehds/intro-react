// import './App.css';
import { Provider } from './context';
import { AppUI } from './pages/AppUI';

function App() {
  return (
    <Provider>
      <AppUI />
    </Provider>
  );
}

export default App;
