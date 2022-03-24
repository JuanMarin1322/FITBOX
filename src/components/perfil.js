import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import Nav from '../components/nav';
import CajonPlan from '../components/cajonPlan';

import '../Styles/perfil.css'

export const Perfil = () => {
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
    
    <div class='divperfil'>
        <div class="divperfil1">
        <h1>Hola, {currentUser.email}</h1>
        <img class="fotoperfil" src='../Perfil.png'/>
        <div class='cajonp1'>
            <div class='cajonp1-t'>
            <h3>Tu info</h3>
            <h2>Solicita cambio</h2>
            
            </div>
            <hr class="linea"></hr>
            <div class='cajonp1-sub'>
            <h3>ID:</h3>
            <h2>XXXXXXXXX</h2>
            </div>
            <div class='cajonp1-sub'>
            <h3>Genero:</h3>
            <h2>XXXXXXXXX</h2>
            </div>
            <div class='cajonp1-sub'>
            <h3>Correo:</h3>
            <h2>XXXXXXXXX</h2>
            </div>
        

        </div>

        <div class='cajonp1'>
            <div class='cajonp1-t'>
            <h3>Tu progreso</h3>
            <h2>Solicita cambio</h2>
            
            </div>
            <hr class="linea"></hr>
            <div class='cajonp1-sub'>
            <h3>Peso:</h3>
            <h2>XXXXXXXXX</h2>
            </div>
            <div class='cajonp1-sub'>
            <h3>Estatura:</h3>
            <h2>XXXXXXXXX</h2>
            </div>
            <div class='cajonp1-sub'>
            <h3>IMC:</h3>
            <h2>XXXXXXXXX</h2>
            </div>          
        

        </div>

        <div class='cajonp1'>
            <div class='cajonp1-t'>
            <h3>Tu progreso</h3>
            <h2>Solicita cambio</h2>
            
            
            </div>
            <h4>Fit ProXXX</h4>
            <hr class="linea"></hr>
            <h5>$000.000/mes</h5>
            <hr class="linea"></hr>
            </div>
            

        </div>
        <div class="divperfil2">
            <div class="divperfil2-p1">
                <h1>hssjsj</h1>
            </div>

        </div>

    </div>
    
    </div> 
  
  )
}
