import React, { useState } from 'react';
import './App.css';
import {MyContext} from './context'
import Children from './Chiledren'
function App() {
  const [theme, setTheme] = useState('dark')
  const [name, setName] = useState('xiaowang')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, method: Function) {
    method(e.target.value)
  }

  return (
    <div>
      <input type="text" value={theme} onChange={e => handleInputChange(e, setTheme)}/>
      <input type="text" value={name} onChange={e => handleInputChange(e, setName)}/>
      <button onClick={() => setTheme('这波是肉蛋葱鸡')}>change</button>
      <MyContext.Provider value={{theme}}>
        <Children></Children>
      </MyContext.Provider>
    </div>
  );
}

export default App;
