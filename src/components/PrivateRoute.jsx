import { useAuth0 } from '@auth0/auth0-react';
import 'styles/maestroUsuario.scss';
import { Link } from 'react-router-dom';
import "styles/navBar.scss";
import "index.js";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;

  

  return isAuthenticated ? <>{children}</>:(
    <div>
      <div className="body">
        <header class="header">
          <div class="header__container">
           

            <Link class="header__logo">DevsTeamMaster</Link>

           <div class="header__toggle">
              <i class="bx bx-menu" id="header-toggle"></i>
            </div>
          </div>
        </header>

        <div class="nav" id="navbar">
          <nav class="nav__container">
            <div>
              <a href="#" class="nav__link nav__logo">
                <i class="fab fa-github-alt  nav__icon"></i>
                <span class="nav__logo-name">MisionTic2021</span>
              </a>
              </div>

            <a href="#" class="nav__link nav__logout">
              <i class="bx bx-log-out nav__icon"></i>
              <span class="nav__name"><Link to='/'>Back to Login</Link></span>
            </a>
          </nav>
        </div>

        <div className='product-container-ususs'>
      <div className='rounded-3xl ml-5 mt-5 product-div-usus'>
        <div className='container-usus'>
          <div className='container-eyes'>      
           <h1>No estás autorizado para acceder a este sitio</h1>
          </div>
        </div>
      </div>
    </div>
       {/* <div className="contenedor-principal"></div> 
        */} 
      </div>
    </div>
    );
};

export default PrivateRoute;