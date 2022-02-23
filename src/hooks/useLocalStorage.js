import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [synchronizedItem, setSynchronizedItem] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [storedValue, setValue] = useState(initialValue);

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const synchronizedLocalStorage = () => {
    setLoading(true);
    setSynchronizedItem(false);
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        const item = localStorage.getItem(key);
        if (item) {
          setValue(JSON.parse(item));
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
      setSynchronizedItem(true);
    }, 1000);
  }, [synchronizedItem]);

  return {
    storedValue,
    setLocalStorage,
    loading,
    error,
    synchronizedLocalStorage
  };
}

export { useLocalStorage };
