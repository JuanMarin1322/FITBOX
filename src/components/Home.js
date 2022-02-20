import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export const Home = () => {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState('');


  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Server Error')
    }
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
                    <button className='logout-button' onClick={handleLogout} >Log Out</button>
                    <p>Hola, {currentUser.email}</p>
                    
                </div>
            </div>
        </nav>
    </header>
    <div class='fondo1'>
    <div class="contenedor">
        <div class="Cajon">
            <h1>ES MOMENTO DE 
            COMENZAR TU RUTINA</h1>
            <p class='caj'>Escoge el plan más adecuado a
            tus necesidades, empieza a entrenar hoy</p>
            <div class="boton">
                <h3>Reserva tu cupo</h3>
            </div>
        </div>
        </div>

    </div>
    <div class='z1'>
    <h1 class='ti2'>ESCOGE EL PLAN QUE MAS TE GUSTE</h1>
    <div class='plan'>
      <div class= 'plansito'>
        <h1>Fit Basico</h1>
        <h2>$ 150.000</h2>
        <h3>Mensual</h3>
        <h4>3 veces por semana</h4>
        <h4>Rutina general</h4>
        <h4>Acompañamiento basico</h4>
        
        <input class='sel' type='submit' value='Seleccionar' />
      </div>
      <div class= 'plansito'>
      
      <h1>Fit Plus</h1>
        <h2>$ 170.000</h2>
        <h3>Mensual</h3>
        <h4>4 veces por semana</h4>
        <h4>Rutina general</h4>
        <h4>Acompañamiento basico</h4>
        
        <input class='sel' type='submit' value='Seleccionar' />
      </div>
      <div class= 'plansito'>
      <h1>Fit Premium</h1>
        <h2>$ 185.000</h2>
        <h3>Mensual</h3>
        <h4>5 veces por semana</h4>
        <h4>Rutina personalizada</h4>
        <h4>Acompañamiento avanzado</h4> 
        
        <input class='sel' type='submit' value='Seleccionar' />
      </div>

      <div class= 'plansito'>
      <h1>Fit Pro</h1>
        <h2>$ 210.000</h2>
        <h3>Mensual</h3>
        <h4>Entrada ilimitada</h4>
        <h4>Rutina personalizada</h4>
        <h4>Acompañamiento completo</h4> 

        <input class='sel' type='submit' value='Seleccionar' />
      </div>

    </div>
    </div>
    









    

    
    </body>
  )
}
