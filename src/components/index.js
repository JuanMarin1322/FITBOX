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
    <div className='card'>
      <div className='card-header' >
      
        <h1>Este es el  index</h1>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
         <input type='submit' value='Log In' />
        </form>
        <form onSubmit={handleSubmitR}>
         <input type='submit' value='Sign Up' />
        </form>
       
        
      </div>

    </div>
  )
}