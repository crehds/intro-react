import './styles.css';

function CreateTodoButton({ openModal, setOpenModal }) {
  const onClick = (event) => {
    const button = event.target;
    if (button.classList.contains('active')) {
      button.classList.remove('active');
    } else {
      button.classList.add('active');
    }
    setOpenModal(!openModal);
  };

  return (
    <button className='CreateTodoButton' onClick={onClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
