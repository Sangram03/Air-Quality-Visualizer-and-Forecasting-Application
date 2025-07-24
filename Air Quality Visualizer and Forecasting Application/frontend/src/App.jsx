import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import React, { useState } from "react";
import LoginPopup from './components/LoginPopup/LoginPopUp';
import './App.css'

function App() {

  const [showLogin,setShowLogin] = useState(false)


  return (
    <>
    { showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin  ={setShowLogin}/>
      <Footer/>
    </div>
    </>
  )
}

export default App
