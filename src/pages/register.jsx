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
                                <i class="fas fa-at"></i>             
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
                                <input type="number" placeholder="Email" id="email"/>  
                            </div>          
                        </div>
                        <div class="inputBx"> 
                            <div className="google-icon">
                                <i class="fas fa-key"></i>   
                            </div>
                            <div>
                                <input type="password" placeholder="Email" id="email"/>  
                            </div>          
                        </div>
                        <div class="inputBx boton">
                            <input class="boton" type="submit" value="Register" onclick="getData()"/>
                        </div>
                    </form>
                    <p class="p"><Link to='/Login'> Back To Login </Link></p>
            </div>
        </div>
  </section>

  );
}

export default Register;
