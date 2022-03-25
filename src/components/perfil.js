import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import Nav from '../components/nav';
import CajonHorario from '../components/cajonHorario';

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
            <h3>Tu plan actual</h3>
            <h2>Solicita cambio</h2>
            
            
            </div>
            <h4>Fit ProXXX</h4>
            <hr class="linea"></hr>
            <h5>$000.000/mes</h5>
            <hr class="linea"></hr>
            <div class='cajonp1-sub1'>
            
            <h6>Entrada ilimitada</h6>
            </div>

            <div class='cajonp1-sub1'>
            <h6>Rutina</h6>
            <h5>personalizada</h5>
            </div>


            <div class='cajonp1-sub1'>
            <h6>Acompañamiento</h6>
            <h5>completo</h5>
            </div>

            <div class='cajonp1-sub1'>
            <h6>Plan de nutrición</h6>
            <h5>completo</h5>
            </div>

            <div class='cajonp1-sub1'>
            <h6>09-09-2022</h6>
            <h5>Proximo pago</h5>
            </div>
            </div>
            

        </div>
        <div class="divperfil2">
            <div class="divperfil2-p1">
                <h1>Horario</h1>
                <hr class="linea"></hr>
                <div class="divperfil2-p1-com">
                <div class="divperfil2-p1-c">
                  <h4>Lunes</h4>
                  <CajonHorario></CajonHorario>
                </div>

                <div class="divperfil2-p1-c">
                  <h4>Martes</h4>
                  <CajonHorario></CajonHorario>
                </div>

                
               

            </div>

            
        </div>

        <div class="divperfil2-p2">
        <h8>Servicios</h8>
                <hr class="linea"></hr>
                <div class="divperfil2-p1-com">
                <div class="divperfil2-p1-c">
                <h4>Facturación</h4>
                <hr class="linea2"></hr>
                <h2>Fit Pro</h2>
                  <h3>$ 210.000/mes</h3>
                  <hr class="linea2"></hr>
                  <h2>09-09-2022 </h2>
                  <h3>Proximo pago</h3>
                  <hr class="linea2"></hr>
                  <h3>Pago en linea</h3>
                  <img class="imgpay" src='../imagen/payu.png'/>
                  <br/>
                  <button class='btn-horario'>Pagar</button>
                  <br/>
                  <br/>
                  <h7>Detalles</h7>
                  
                </div>

                <div class="divperfil2-p1-c">
                <h4>Productos</h4>
                <hr class="linea2"></hr>
                <h5>Platinum Hydro Whey</h5>
                  <h3>$300.000</h3>
                  <img class="imgprodu" src='../imagen/proteina.png'/>
                  <hr class="linea2"></hr>
                  <h3>Pago en linea</h3>
                  <img class="imgpay" src='../imagen/payu.png'/>
                  <br/>
                  <button class='btn-horario'>Pagar</button>
                  <br/>
                  <br/>
                  <h7>Detalles</h7>
                  
                </div>

                <div class="divperfil2-p1-c">
                <h4>Progreso</h4>
                <hr class="linea2"></hr>

                <div class='nuev'>
                <h2>Vas muy bien, sigue entrenando</h2>
                  
                  <hr class="linea2"></hr>

                  <h6>Peso: 70Kg </h6>
                  <h6>Estatura: 1,80M </h6>
                  <h6>IMC: 21.6 (Normal)</h6>
                  </div>
                  <br/>
                  <button class='btn-horario'>Revision</button>
                  <br/>
                  <br/>
                  <h7>Detalles</h7>
                  
                </div>

                </div>
            </div>


            


    </div>
    
    </div> 
    </div>
  
  )
}
