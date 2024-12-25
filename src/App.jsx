import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useLocalStorage from './Hooks/UseLocalStore';
import useDebounce from './Hooks/UseDebounce';
import { useState, useEffect } from 'react';

function App() {
  const [storedValue, setStoredValue] = useLocalStorage('count', 0);
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    console.log('API called with:', debouncedInputValue);
  }, [debouncedInputValue]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setStoredValue((storedValue) => storedValue + 1)}>
          count is {storedValue}
        </button>
        <button onClick={() => setStoredValue((storedValue) => storedValue - 1)}>
          count is {storedValue}
        </button>
        <p>
          Debounced Input Value: {debouncedInputValue}
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App