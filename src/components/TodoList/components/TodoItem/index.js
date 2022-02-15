import './styles.css';

function TodoItem(props) {
  const onComplete = (event) => {
    const textOfP = event.target.nextSibling.textContent;

    props.setTodos((prevTodos) => {
      const updateTodos = prevTodos.slice();
      const updateTodo = updateTodos.find((todo) => todo.text === textOfP);

      updateTodo.completed = !updateTodo.completed;

      return updateTodos;
    });
  };

  const onDelete = (event) => {
    const textOfP = event.target.previousSibling.textContent;

    props.setTodos((prevTodos) => {
      const updateTodos = prevTodos.filter((todo) => todo.text !== textOfP);

      return updateTodos;
    });
  };

  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className='Icon Icon-delete' onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
