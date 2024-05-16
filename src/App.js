
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import About from './components/about'
// import { useState } from 'react';
import React,{useState} from 'react';
import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // check whether dark mode is enabled or not
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
}
  
  const toggleMode=(cls)=>{
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0c1835';
      showAlert("Dark mode has been enabled","success");
      // document.title=("TextUtils-Dark mode");
      // setInterval(()=>{
      //   document.title=("TextUtils is an amazing mode");
      // }, 2000)
      // setInterval(()=>{
      //   document.title=("Install TextUtils now");
      // }, 1500)
    }
    else{setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title=("TextUtils-Light mode");

    }
  }
  return (
    <>
    {/* <Navbar title="TextUtilsss" aboutText="About TextUtils"/> */}

  <Router>
  <Navbar title="TextUtilsss" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <switch>
    <Routes>
      <Route exact path="/about" element={
        <About mode={mode}/>
      }/>
      <Route exact path="/" element={
        // <div className='container my-3'></div>
        <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
        // <div/>
      }/>
    </Routes>
    </switch>
    
  </Router>
    
    
    </>
  );
}

export default App;
