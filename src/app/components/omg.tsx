"use client"
import React, { ImgHTMLAttributes, useState } from "react";
import './omg.css';

export default function Omg() {
  
    // definindo estado inicial
  const [perry, setPerry] = useState<string | null>(null);

  // função para mudar a imagem
  const perryPlatypus = () => {
    setPerry('https://i.pinimg.com/564x/82/07/c1/8207c15ef2ca09c6bc2142398e15dcb0.jpg');
  };

  // função para resetar a imagem

  const platypus = () => {
    setPerry('https://i.pinimg.com/564x/fc/4a/86/fc4a86a02e71c8e0b521167c1f60d3ac.jpg');
  };

  return (
    <div  className="container">
    <div className="btn-box">

      <button onClick={platypus}>A platypus</button>
      <button onClick={perryPlatypus}>PERRY THE PLATYPUS</button>
      
    </div>

    <div className="perry-img">

    {perry && <img src={perry} alt="Imagem do Perry ou Platypus" />}

    </div>
    </div>
  );
}