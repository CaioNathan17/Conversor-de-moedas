//import React, { Component } from "react";
import './logo.svg';
import './App.css';

import Conversor from "./components/conversor";



    function App() {
      return (
        <div className="App">
          <h1> Conversor de Moedas</h1>
          <div className="linha1">
            <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          </div> 
          <div className="linha2">
            <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          </div>

          <div className="linha3">
            <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          </div>
          <div className="linha4">
            <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
          </div>

          <div className="linha5">
            <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          </div>
          <div className="linha6">
            <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
          </div>
        
        </div>

      );
    
  }


export default App;
