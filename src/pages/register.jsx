import 'styles/login.scss';
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUsers} from '../utils/api';


    const  Register= () => {
        const form = useRef(null);
  
        const submitForm = (e) => {
          e.preventDefault();
          const fd = new FormData(form.current);
      
          const newUser = {};
          fd.forEach((value, key) => {
            newUser[key] = value;
          });
          console.log('Datos del formulario: ', newUser);
          //Calling api
          createUsers(newUser);
        };
  return (
    <section className="login">
        <div className="box">
            <div className="form">
                <h2>Register</h2>
                    <form 
                    ref={form}
                    onSubmit={submitForm}
                    action="">
                        <div className="inputBx"> 
                            <div className="google-icon">
                                 <i class="fas fa-user"></i>          
                            </div>
                            <div>
                                <input name='nameUser' type="text" placeholder="Nombre" id="nombre"/>  
                            </div>          
                        </div>
                        <div className="inputBx"> 
                            <div className="google-icon">
                                 <i class="fas fa-user"></i>          
                            </div>
                            <div>
                                <input name='lastNameUser' type="text" placeholder="Apellido" id="apellido"/>  
                            </div>          
                        </div>
                        <div className="inputBx"> 
                            <div className="google-icon">
                                <i className="fas fa-at"></i>             
                            </div>
                            <div>
                                <input name='emailUser' type="email" required placeholder="Correo electrónico" id="email"/>  
                            </div>          
                        </div>
   
                       {/* <div className="inputBx"> 
                            <div className="google-icon">
                                <i className="fas fa-key"></i>   
                            </div>
                            <div>
                                <input type="password" placeholder="Contraseña" id="email"/>  
                            </div>      
                        </div>*/}  
                      

                    <div className="boton-padre">
                    <div className="btn-hijo">
                         <button type="submit" className="login-btn">
                            <span>Register</span>
                         </button>
                         <ToastContainer position='bottom-center' autoClose={5000} />
                    </div>
                   
          </div>
                    </form>
                    <Link to='/Login'> <div className="p">
                <span ><h3>Back to Login</h3></span>   
            </div> </Link>  
            </div>
        </div>
  </section>

  );
}

export default Register;
