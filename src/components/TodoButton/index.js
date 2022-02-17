import './styles.css';

function CreateTodoButton(props) {
  const onClick = (msg) => {
    alert(msg);
  };

  return (
    <button
      className='CreateTodoButton'
      onClick={() => onClick('Aquí va el mensaje')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
