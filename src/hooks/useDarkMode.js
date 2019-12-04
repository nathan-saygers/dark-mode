import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [storedValue, setStoredValue] = useLocalStorage(darkOn, false)
  return [storedValue, setStoredValue];
}

export default useDarkMode;