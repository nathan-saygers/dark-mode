import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  })
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setStoredValue, setValue];
}

export default useLocalStorage;