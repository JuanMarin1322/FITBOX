import react from "react";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import '../Styles/nav.css'

function Nav (){

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

    
    return(
        <header>
            <nav>
            <div class="nav-bar">
            <img class="logos" src='../logo.png'/>

                <div class="anav">
                    <a href="ejemplo.html">Inicio</a>
                    <a href="#">Mi perfil</a>
                    <a href="#">Productos</a>
                    <a href="#">Planes</a>
                    <a href="#">¿Quienes somos?</a>
                    <button className='logout-button' onClick={handleLogout} >Log Out</button>
                    
                    
                </div>
            </div>
        </nav>
    </header> 
    );
}
export default Nav;