import { useState } from 'react'
import Navbar from './component/Navbar.jsx';
import Textform from './component/Textform';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light'); 
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  return (
    <>
      
          <Navbar title ="Convert Text" mode = {mode} toggleMode = {toggleMode}/>
          <Alert alert={alert}/>
          <Textform showAlert = {showAlert} mode ={mode}/>        
                
    </>
  )
}

export default App
