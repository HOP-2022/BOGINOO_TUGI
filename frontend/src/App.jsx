import React from 'react'
import React, { useRef, useState } from "react";
import NavBar from './component/Nav-Bar/navBar'
import Logo from './component/Logo/logo'
import axios from 'axios'
import Footer from './Footer/Footer'
import './App.css'

const App = () => {
  const [URL, setURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const url = useRef("");
  console.log(data);
  const change = (e) => {
    if (e.target.value === "") {
      setURL("");
    }
  };
  const link = () => {
    axios
      .post("http://localhost:8000/links", {
        URL: url.current.value,
      })
      .then(function (response) {
        console.log("LOG: ", response);
        setURL(response.data.data.URL);
        setShortURL("http://localhost:3000/" + response.data.data._id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar/>
      <div className='Body'>

        <div className='Center'>

          <Logo className='Logo-Location'></Logo>

          <div>
            <input placeholder='https://www.web-huudas.mn' className='Input-Box' type="text" />
            <button className='White-Text'>
                <text>Богиносгох</text>
            </button>
          </div>

        </div>

      </div>
      <Footer/>
    </>
  )
}

export default App