import react from "react";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import '../Styles/nav.css'

function NavUNR (){

  const history = useHistory();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
      history.push('/login');
    
  }

  const handleSubmitR = async (e) => {
    e.preventDefault();
    
      history.push('/signup');
    
  }

    
    return(
        <header>
            <nav>
            <div class="nav-bar">
            <img class="logos" src='https://i.ibb.co/bHRTysc/logo.png'/>

                <div class="anav">
                    <a href="/">Inicio</a>
                    <a href="/login">Mi perfil</a>
                    <a href="/login">Productos</a>
                    <a href="/login">Planes</a>
                    <a href="#">¿Quienes somos?</a>
                    <button className='logout-button' onClick={handleSubmit} >Iniciar sesion</button>
                    <button className='logout-button' onClick={handleSubmitR} >Registrarse</button>
                    
                    
                </div>
            </div>
        </nav>
    </header> 
    );
}
export default NavUNR;