import './App.css';
import Navbar from './components/Navbar';
 import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/alert';
// import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// let name = "soham";
function App() {
 const [mode,setMode] = useState('light');
 
 const [alert,setAlert] = useState(null);
 const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
 }

 const toggleMode = () =>
 {
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextEdit - Dark Mode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
    document.title = 'TextEdit - Light Mode';
  }
 }
  return (
    
   <>
   
  {/*<Navbar title="Soham" aboutText="About" />*/}
 <Router>
 <Navbar title = "Soham" mode={mode} toggleMode={toggleMode}/>
 <Alert alert = {alert}/>
    <div className="container my-3"  >
    
    <Switch>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
          </Route>
          <Route exact path="/about">
      <About/>
          </Route>
        </Switch>
        </div>
        </Router>
 

    </>
    
    

    


  );
}

export default App;
