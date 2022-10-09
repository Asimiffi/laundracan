
import './App.css';
import Navbar from'./components/navbar';
import Home from './pages/Homepage';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './components/footer';
import Thankyou from './pages/thankyou';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 
  const [isVisible, setisVisible] = useState(false);

  const handleScroll = ()=>{
    if (document.documentElement.scrollTop>613){
        setisVisible(true)
    }
    else{
        setisVisible(false)
    }
    console.log(document.documentElement.scrollTop);  
  }
  useEffect(() => {
    window.addEventListener(  "scroll", handleScroll)
  }, [])
  

  return (

    <div className="App">
     <div>
       <Navbar isVisible={isVisible} setisVisible={setisVisible}/>
      </div>
      <div className='main'>
      <Routes>
      <Route exact path="/" element={<Home/>} /> 
      <Route exact path="/thankyou" element={<Thankyou/>} />  
      </Routes>
      </div>
      <Footer />
    </div>
 
  );
}

export default App;
