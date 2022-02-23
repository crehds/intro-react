import { withStorageListener } from '../../HOCs/withStorageListener';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button onClick={() => toggleShow(false)}>
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageAlert = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageAlert };
