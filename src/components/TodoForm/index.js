import { useContext, useState } from 'react';
import { Context } from '../../context';

import './styles.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');
  const { addTodo, handlerModal } = useContext(Context);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    handlerModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    handlerModal();
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor=''>...</label>
      <textarea
        name='test'
        value={newTodoValue}
        onChange={onChange}
        id=''
        cols='30'
        rows='10'
        placeholder='Cortar la cebolla para el almuerzo'
      ></textarea>

      <div className='TodoForm-buttonContainer'>
        <button
          className='TodoForm-button cancel'
          type='button'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className='TodoForm-button add' type='submit'>
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
