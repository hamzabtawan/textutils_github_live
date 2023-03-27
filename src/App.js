import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("dark mode has been enabled", "success");
      document.title = 'dark mode'
      setInterval(() => {
        document.title = 'amazing'
      }, 2000);
      setInterval(() => {
        document.title = 'dark mode'
      }, 1500);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enabled", "success");
      document.title = 'light mode'


    }
  }
  return (
    <>
        <Navbar title="textUtils" about="about us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <TextForm showalert={showalert} heading="enter the text to analyze" mode={mode} />
    </>
  );
}

export default App;
