import './styles.css';

function CreateTodoButton({ handlerModal }) {
  const onClick = () => {
    handlerModal();
  };

  return (
    <button className='CreateTodoButton' onClick={onClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
