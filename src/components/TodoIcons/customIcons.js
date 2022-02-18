import { TodoIcon } from '.';

function CompleteIcon({ complete, onComplete }) {
  return (
    <TodoIcon
      type='check'
      onClick={onComplete}
      color={complete ? '#4caf50' : 'gray'}
    />
  );
}

function DeleteIcon({ onDelete }) {
  return <TodoIcon type='delete' onClick={onDelete} />;
}

export { CompleteIcon, DeleteIcon };
