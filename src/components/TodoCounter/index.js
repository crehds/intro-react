import './styles.css';

function TodoCounter({
  totalTodos: total,
  completedTodos: completed,
  loading
}) {
  return (
    <h2 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>
      Has completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };
