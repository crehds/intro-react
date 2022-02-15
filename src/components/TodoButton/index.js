import './styles.css';

function CreateTodoButton(props) {
  const onClick = (msg) => {
    alert(msg);
  };

  return (
    <button
      className='CreateTodoButton'
      onClick={() => onClick('Aqui va el mensaje')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
