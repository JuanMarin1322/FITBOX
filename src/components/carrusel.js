import React, { useState } from 'react';

import '../Styles/carrusel.css';

export const Carrusel = () => {
  
  
  return (
       
    
    <div class="container"> 
    <div class="texto">
        <p>Platinum Hydro Whey</p>   
        <p>$300.000</p> 
    
    </div>
    
    <div class="image">
      
        <img src="https://www.proteinacanaria.com/505-thickbox_default/platinum-hydrowhey-16-kg.jpg"/>
        
    </div>    

    <div class="stars">

        <form>
            <p class="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5"/>
              <label for="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4"/>
              <label for="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3"/>
              <label for="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2"/>
              <label for="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1"/>
              <label for="radio5">★</label>
            </p>
          </form>

    </div>

    <div class="linea"></div>    
    
    <div class="payu">
        
    </div>
    
    <div class="comprar">
        
    <div class="detalles">
        <p class="detallitos">Detalles</p>
    </div>    
</div>
</div>
  
    
  )
}
export default Carrusel;