import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import Nav from '../components/nav';
import CajonHorario from '../components/cajonHorario';

import '../Styles/comPerfil.css'

export const ComPerfil = () => {
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
    <div class='tiCom'>
        <h1>Completa tu perfil</h1>
        <h2>Termina tu inscripción y porporciona los datos necesarios para darte la mejor experiencia</h2>
        <div class="input-1">
            <input class="inp-1" placeholder='Nombre'></input>
            <input class="inp-2" placeholder='Apellido'></input>
            <input class="inp-3" placeholder='Edad'></input>
        </div>

        <div class="input-1">
            <input class="inp-1" placeholder='Nacimiento (DD/MM/AAAA)'></input>
            <select class="inp-4" placeholder='Genero'>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
            </select>
            <input class="inp-5" placeholder='Peso (Kg)'></input>
            <input class="inp-5" placeholder='Estatura (M)'></input>
        </div>
        <h2>Los datos registrados a continuacion son complementarios pero son de gran ayuda para que obtengas los mejores resultados</h2>
        <h3>Enfermedades conocidas</h3>
        <input class="cuadroTx" type="text" size="150" maxlength="300" ></input>
        <h3>Enfermedades conocidas</h3>
        <div>

        </div>
      </div>
    
    </div>
  
  )
}
