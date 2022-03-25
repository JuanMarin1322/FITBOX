import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import Nav from '../components/nav';
import CajonPlan from '../components/cajonPlan';
import Carrusel from '../components/carrusel';
import '../Styles/home.css'

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
    <div>
    <Nav></Nav>
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
      <CajonPlan></CajonPlan>
      <CajonPlan></CajonPlan>
      <CajonPlan></CajonPlan>
      <CajonPlan></CajonPlan>    

      </div>
      </div>
      <div class='homeTienda'>
        <div class='homeTienda-texto'>
          <h1>COMPLEMENTA TU<br/>ENTRENAMIENTO CON NUESTROS PRODUCTOS</h1>
        </div>
        <div class='homeTienda-carrusel'>
        <h1>IMAGEN</h1>
        </div>
      </div>
      <div class="homecalculos">
        <h1>CALCULA TUS HABITOS<br/>SALUDABLES</h1>
      </div>
        <div class="ingCalculos">
        <h2>Ingresa tus datos</h2>
          <div class="datCalculos">
            <input class="dat" placeholder='Peso'></input>
            <input class="dat" placeholder='Altura'></input>
            <select class="dat" placeholder='Genero'>
            
            <option value="value2" >Masculino</option>
            <option value="value3">Femenino</option>
            <option value="value3">Otro</option>
            </select>
            <input class="dat" placeholder='Edad'></input>
          </div>

          <div class="datCalculos">
          <button class='btn-enviar'>IMC</button>
          <button class='btn-enviar'>Vasos Agua</button>
          </div>

          <div class="datCalculos">
          <label class="dat"></label>
          <label class="dat"></label>
          </div>
          </div>   
     
    
  </div>
  )
}
