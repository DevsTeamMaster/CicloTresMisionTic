import 'styles/login.scss';
import { Link } from 'react-router-dom';
import logo from 'media/logo.png'
//Libreria react para utilizar los iconos
import { BiLockAlt } from "react-icons/bi";
import lock from 'media/lock.png'
//Importamos libreria FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";



function Login() {
  const { loginWithRedirect } = useAuth0(); //se importa esta linea desde aut0-react.js
  return (
    <section className="login"> 
    <div className="box">
      <div className="form">
          <div className = "logo">
                  <img src={logo} alt="" />            
          </div>
        <h2>Login</h2>
        <form action="">
          <div className="inputBx"> 
            <div className="google-icon">
                <i className="fas fa-user"></i>          
            </div>
            <div>
            <input type="email" placeholder="Email" id="email"/>  
            </div>          
          </div>
          <div className="inputBx"> 
            <div className="google-icon">
                <i className="fas fa-lock"></i>           
            </div>
            <div>
            <input type="password" placeholder="Contraseña" id="email"/>  
            </div>          
          </div>
          <div className="boton-padre">
              <div className="btn-hijo">
              
              <button className="login-btn" onClick={() => loginWithRedirect()} //se importa esta linea desde aut0-react.js
              > 
              
              <div>
              <span>Login</span>
              </div>
              
                </button>
           
            </div>
          </div>
          <div className="boton-padre">
              <div className="btn-hijo">
                <button className="googlebtn">
                <FontAwesomeIcon icon={['fab', 'google']} />
                </button>
            </div>
          </div>
        </form>
        <Link to='/Register'> <div className="p">
                <span ><h3>Registrarse</h3></span>   
        </div> </Link>                 
      </div>
    </div>
  </section>
  );
}

export default Login;
