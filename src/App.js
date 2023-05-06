//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
 import Textform from './component/Textfrom';
 //import Switch from 'react-router-dom';
import Alert from './component/Alert';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

//import React,{useState} from 'react';
function App() {
  const [mode,setMode]=useState('light ');//whether dark mode is enable or not.
  const [alert,setAlert]=useState("");
  //({
   // message: null, //Initially alert state is null, so it can't read props.alert.type. You can use optional chaining when reading or you can initialize the state with null values.
   // type: null,
 // });
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
   setTimeout(() => {
    setAlert(null)
   }, 3000); 
  }
  const toggleMode = () =>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
     showAlert("dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }
  return(
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route  path="/about">
            <About />
          </Route>
          <Route  path="/">
            < Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
  
    </div>
    </Router>
    </> 
  );
}




export default App;
