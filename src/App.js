import "./App.css";
import Alert from "./components/Alert";
import Navebar from "./components/Navebar";
import Text from "./components/Text";
import About from "./components/About"
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (type, massage) => {
    setAlert({
      type: type,
      msg: massage
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#0c1e2f";
      showAlert("success", "dark mode has been enable")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("success", "light mode has been enable")
    }
  }

  return (
    <>
      <Router>
        <Navebar title="textutils" about="about text" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element= { <About mode={mode}/>}/>
             
            <Route exact path="/" element= { <Text heading="enter your text to analise the text" mode={mode} showAlert={showAlert} />}/>
      
          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;
