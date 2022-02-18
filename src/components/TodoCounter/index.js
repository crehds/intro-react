import './styles.css';

function TodoCounter({ totalTodos: total, completedTodos: completed }) {
  return (
    <h2 className='TodoCounter'>
      Has completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };
