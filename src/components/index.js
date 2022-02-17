import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


export const Index = () => {
  
  const history = useHistory();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      history.push('/login');
    
  }

  const handleSubmitR = async (e) => {
    e.preventDefault();
    
      history.push('/signup');
    
  }



  return (
    <body>
    <header>
            <nav>
            <div class="nav-bar">
                <h3> 
                    Ejemplo
                </h3>

                <div>
                    <a href="ejemplo.html">Inicio</a>
                    <a href="#">Nutrición</a>
                    <a href="#">Productos</a>
                    <a href="#">Planes</a>
                    <a href="#">¿Quienes somos?</a>
                    <form onSubmit={handleSubmit}>
         <input type='submit' value='Log In' />
        </form>
        <form onSubmit={handleSubmitR}>
         <input type='submit' value='Sign Up' />
        </form>
                </div>
            </div>
        </nav>
    </header>
    <div class='fondo1'>
    <div class="contenedor">
        <div class="Cajon">
            <h1>ES MOMENTO DE 
            COMENZAR TU RUTINA</h1>
            <p>Escoge el plan más adecuado a
            tus necesidades, empieza a entrenar hoy</p>
            <div class="boton">
                <h3>Conocer más</h3>
            </div>
        </div>
        </div>

    </div>
    <div class='z1'>

    </div>
    
    </body>
      
       
        
       
        
        

      
       
       
        
     
      

    
  )
}