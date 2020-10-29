import React, {useState} from 'react';
import './App.css';
import CustomInput from './CustomInput'

function App() {
  const [value, setValue] = useState('')
  return (
    <CustomInput value={value} onChange={setValue}></CustomInput>
  )
}

export default App;
