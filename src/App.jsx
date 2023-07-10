import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
import OutputBox from './components/OutputBox'


function App() {
  
  const [toggle, setToggle] = useState(true);
  const [ans, setAns] = useState("Ask Something");

  return (

    <>
      <div id = "box">
        <InputBox setAns = {setAns} />
        <OutputBox ans = {ans} />
      </div>
    </>
  );
}

export default App
