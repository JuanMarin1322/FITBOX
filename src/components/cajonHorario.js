import React, { useState } from 'react';

import '../Styles/cajonHorario.css';

export const CajonHorario = () => {
  
  
  return (
       
    
      <div>
        <hr class="linea2"></hr>
                  <h2>5:00 PM</h2>
                  <h3>1 hora programada</h3>
                  <hr class="linea2"></hr>
                  <h2>Juan Perez</h2>
                  <h3>Entrenador</h3>
                  <hr class="linea2"></hr>
                  <div class='divperfil2-p1-img'>
                  <img class="imgHorario" src='https://i.ibb.co/kgGSSdY/cardio.png'/>
                  <h3>Realizar cardio</h3>
                  </div>
                  <div class='divperfil2-p1-img'>
                  <img class="imgHorario" src='https://i.ibb.co/r5pXY8g/calentamiento.png'/>
                  <h3>Realizar cardio</h3>
                  </div>
                  <div class='divperfil2-p1-img'>
                  <img class="imgHorario" src='https://i.ibb.co/0Drw2HL/gym.png'/>
                  <h3>Realizar cardio</h3>
                  </div>
                  <button class='btn-horario'>Modificar</button>
      </div>
      
    
  
    
  )
}
export default CajonHorario;