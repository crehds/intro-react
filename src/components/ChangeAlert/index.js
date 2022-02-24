import { useStorageListener } from '../../hooks/useStorageListener';
import './styles.css';

function ChangeAlert({ synchronized }) {
  const { storageChange, toggleShow } = useStorageListener(synchronized);
  if (storageChange) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador
          </p>

          <p>Quieres sincronizar tus TODOs?</p>
          <button
            className='TodoForm-button TodoForm-button--add'
            onClick={() => toggleShow(false)}
          >
            Yes!!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
