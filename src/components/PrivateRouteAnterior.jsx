import { useAuth0 } from '@auth0/auth0-react';
import 'styles/maestroUsuario.scss';
import { Link } from 'react-router-dom';
import 'styles/navBar.scss';
import 'index.js';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div>
      <div className='body'>
        <header className='header'>
          <div className='header__container'>
            <Link className='header__logo'>DevsTeamMaster</Link>

            <div className='header__toggle'>
              <i className='bx bx-menu' id='header-toggle'></i>
            </div>
          </div>
        </header>

        <div className='nav' id='navbar'>
          <nav className='nav__container'>
            <div>
              <a href='#' className='nav__link nav__logo'>
                <i className='fab fa-github-alt  nav__icon'></i>
                <span className='nav__logo-name'>MisionTic2021</span>
              </a>
            </div>

            <a href='#' className='nav__link nav__logout'>
              <i className='bx bx-log-out nav__icon'></i>
              <span className='nav__name'>
                <Link to='/'>Back to Login</Link>
              </span>
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
