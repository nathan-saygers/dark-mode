import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';

const useDarkMode = (initialValue) => {
  const [storedValue, setStoredValue, setValue] = useLocalStorage('darkOn', initialValue)
  useEffect(() => {
    let body = document.getElementsByTagName('body');
    console.log(body);
    if(storedValue){
      body[0].className = 'dark-mode';
    } else {
      body[0].className = ('');
    }
  }, [storedValue]);

  return [storedValue, setValue];
}

export default useDarkMode;