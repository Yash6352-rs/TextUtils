import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout( ()=> {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
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
      {/*<Navbar title="TextUtlis" />*/}
      <Router>
        <Navbar title="TextUtlis" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} /> } />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtilis - word Counter, character Counter, remove extra spaces" mode={mode} />} />
        </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
