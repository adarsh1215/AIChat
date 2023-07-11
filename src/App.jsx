import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Logo from './components/logo/Logo'
import InputBox from './components/InputBox'
import OutputBox from './components/output/OutputBox'
import ThemToggle from './components/themeToggle/ThemToggle'


function App() {
  
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(false);
  const [chatStack, setChatStack] = useState([]);

  return (

    <>
      <div className = {`box box-${theme}`}>
        <Logo chatStack={ chatStack } isLoading = {isLoading} />
        <ThemToggle theme = {theme} setTheme = {setTheme} />
        <InputBox setChatStack = {setChatStack} chatStack = {chatStack} setIsLoading = {setIsLoading} />
        <OutputBox chatStack = {chatStack} />
      </div>
    </>
  );
}

export default App
