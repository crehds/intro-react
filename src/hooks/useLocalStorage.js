import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (!item) {
        localStorage.setItem(key, JSON.stringify([]));
        return initialValue;
      } else {
        return JSON.parse(item);
      }
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setLocalStorage];
}

export { useLocalStorage };
