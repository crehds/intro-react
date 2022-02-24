import { useState } from 'react';

export function useStorageListener(synchronized) {
  const [storageChange, setStorageChange] = useState(false);
  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      console.log('Hubo cambios en TODOS_V1');
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronized();
    setStorageChange(false);
  };
  return { storageChange, toggleShow };
}
