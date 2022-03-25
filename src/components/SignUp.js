import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

//import Spinner from '../spinner.svg';
import '../Styles/signUp.css'
import { useAuth } from '../context/AuthContext';


export const SignUp = () => {
  const { signup } = useAuth();

  const [error, setError] = useState(null);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 // const [loading, setLoading] = useState(false);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleConfirmPassword = e => setConfirmPassword(e.target.value);

  

  const handleSubmit = async (e) => {
    // No se recarga
    e.preventDefault();
    //setLoading(true);
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      setTimeout(() => setError(''), 1500);
    } else {
      try {
        await signup(email, password);
        history.push('/perfilC');
      } catch (error) {
        setError('Credenciales invalidas');
        setTimeout(() => setError(''), 1500);
      }
    }
  }

  return (
    <body class='fondRegi'>
    <div className='card-log'>
      <div className='log' >
        {error && <p className='error' >{error}</p>}
        <h1>Registrate</h1>
        <h2>Inscribete a tu vida Fit</h2>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit} >
          <input type='email' placeholder='Email' onChange={handleEmail} />
          <input type='password' placeholder='Password' onChange={handlePassword} />
          <input type='password' placeholder='Confirm Password' onChange={handleConfirmPassword} />
          <p><Link to='/login'>¿Ya tienes una cuenta? Ingresa</Link> </p>
          <input type='submit' value='Sign Up' />
        </form>

       
      </div>

    </div>
    </body>
  )
}
