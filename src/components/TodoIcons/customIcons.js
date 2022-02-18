import { TodoIcon } from '.';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type='check'
      onClick={onComplete}
      color={completed ? '#4caf50' : 'gray'}
    />
  );
}

function DeleteIcon({ onDelete }) {
  return <TodoIcon type='delete' onClick={onDelete} />;
}

export { CompleteIcon, DeleteIcon };
