import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import '../Styles/login.css'
//import Spinner from '../spinner.svg';

export const Login = () => {

  const { login } = useAuth();
  const [error, setError] = useState(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setLoading(true);
    try {
      await login(email, password);
      //setLoading(false);
      history.push('/');
    } catch (error) {
      //setLoading(false);
      setError('Credenciales incorrectas');
      setTimeout(() => setError(''), 1500);
    }
  }


  return (
    <body class='fondLogin'>
    <div className='card-log'>
      <div className='log' >
        {error && <p className='error' >{error}</p>}
        <h1>Ingresa</h1>
        <h2>Ven a revisar tu progreso</h2>
      </div>                                                                                            
      <div className='card'>
        <form onSubmit={handleSubmit} className='card-logi'>
          
          <input type='email' placeholder='Correo electronico' onChange={handleEmail} />
          <input type='password' placeholder='Contraseña' onChange={handlePassword} />
          <Link to='/signup'>¿Olvidaste tu usuario o contraseña?</Link> 
          <input type='submit' value='Log In' />
          
        </form>
        <br>
        </br>
        <p><Link to='/signup'>Sign Up</Link> </p>
      </div>

    </div>
    </body>
  )
}