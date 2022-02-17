import { useContext } from 'react';
import { Context } from '../../context';
import './styles.css';

function TodoCounter() {
  const { totalTodos: total, completedTodos: completed } = useContext(Context);
  return (
    <h2 className='TodoCounter'>
      Has completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };
