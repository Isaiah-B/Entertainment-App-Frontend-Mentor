import { useState } from 'react';

function useLocalStorage(key: string, initialValue: unknown) {
  const [storedValue, setStoredValue] = useState(() => {
    // Set initial state val as existing item in storage or passed initialValue
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err: any) {
      if (process.env.NODE_ENV === 'development') {
        throw new Error(err.message);
      }
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function
        ? value(storedValue)
        : value;

      setStoredValue(valueToStore);

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err: any) {
      if (process.env.NODE_ENV === 'development') {
        throw new Error(err.message);
      }
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
