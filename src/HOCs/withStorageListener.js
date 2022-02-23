import { useState } from 'react';

export function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.synchronized();
      setStorageChange(false);
    };
    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}
