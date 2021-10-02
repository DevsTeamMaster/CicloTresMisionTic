import 'styles/login.scss';
import { Link } from 'react-router-dom';



function Register() {
  return (
    <section className="login">
        <div className="box">
            <div className="form">
                <h2>Register</h2>
                    <form action="">
                        <div class="inputBx"> 
                            <div className="google-icon">
                                <i className="fas fa-at"></i>             
                            </div>
                            <div>
                                <input type="email" placeholder="Email" id="email"/>  
                            </div>          
                        </div>
                        <div class="inputBx"> 
                            <div className="google-icon">
                                <i class="fas fa-mobile-alt"></i>        
                            </div>
                            <div>
                                <input type="number" placeholder="Telefono" id="email" />  
                            </div>          
                        </div>
                        <div class="inputBx"> 
                            <div className="google-icon">
                                <i class="fas fa-key"></i>   
                            </div>
                            <div>
                                <input type="password" placeholder="Contraseña" id="email"/>  
                            </div>          
                        </div>
                      

                    <div className="boton-padre">
                    <div className="btn-hijo">
                         <button className="login-btn">
                            <span>Register</span>
                         </button>
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
