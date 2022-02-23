import { withStorageListener } from '../../HOCs/withStorageListener';
import './styles.css';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
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

const ChangeAlertWithStorageAlert = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageAlert };
