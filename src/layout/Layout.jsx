import React, { Children } from "react";
import imagenUsuario from "media/perfil.jpg";
import { Link } from "react-router-dom";
import "styles/sales.scss";
import "styles/styles.scss";

import PrivateRoute from 'components/PrivateRoute';
//import Navbar from 'components/Navbar'
import {useAuth0} from "@auth0/auth0-react";

const Layout = ({ children }) => {
  const{logout}=useAuth0();
  return (
    <PrivateRoute>
      <div>
        <div className='body'>
          <header className='header'>
            <div className='header__container'>
              <img src={imagenUsuario} alt='' className='header__img' />

              <Link to='#' className='header__logo'>
                DevsTeamMaster
              </Link>

              <div className='header__search'>
                <input
                  type='search'
                  placeholder='Search'
                  className='header__input'
                />
                <i className='bx bx-search header__icon'></i>
              </div>

              <div className='header__toggle'>
                <i className='bx bx-menu' id='header-toggle'></i>
              </div>
            </div>
          </header>

          <div className='nav' id='navbar'>
            <nav className='nav__container'>
              <div>
                <a
                  href='https://trello.com/b/woQFw4FX/sprint2'
                  target='_blank'
                  className='nav__link nav__logo admin-header'
                >
                  <i className='fab fa-trello  nav__icon'></i>
                  <span className='nav__logo-name'>MisionTic2021</span>
                </a>

                <div className='nav__list admin'>
                  <div className='nav__items'>
                    <h3 className='nav__subtitle'>Registrar</h3>

                    <div className='nav__dropdown'>
                      <Link to='/AddProduct' className='nav__link'>
                        <i className='fas fa-archive nav__icon'></i>
                        <span className='nav__name'>RegistroProduct</span>
                        <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                      </Link>

                      <div className='nav__dropdown-collapse'>
                        <div className='nav__dropdown-content'>
                          <Link
                            to='/MasterProducts'
                            className='nav__dropdown-item'
                          >
                            MaestroProductos
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className='nav__dropdown'>
                      <Link to='/addSales' className='nav__link'>
                        <i className='fas fa-receipt nav__icon'></i>
                        <span className='nav__name'>RegistroVentas</span>
                        <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                      </Link>

                      <div className='nav__dropdown-collapse'>
                        <div className='nav__dropdown-content'>
                          <Link to='MasterSales' className='nav__dropdown-item'>
                            MaestroVentas
                          </Link>
                          {/*<a href="#" className="nav__dropdown-item">
                          Mail
                        </a>
                        <a href="#" className="nav__dropdown-item">
                          Accounts
                        </a>*/}
                        </div>
                      </div>
                    </div>

                    {/*<a href="#" className="nav__link">
                    <i className="bx bx-message-rounded nav__icon"></i>
                    <span className="nav__name">Messages</span>
                      </a>*/}
                  </div>
                  <div>
                    <Link to='/IntMastProd' className='nav__link'>
                      <i className='fas fa-box nav__icon'></i>
                      <span className='nav__logo-name '>Productos</span>
                    </Link>
                  </div>

                  <div className='nav__items admin'>
                    <h3 className='nav__subtitle'>Admin</h3>

                    {/* <div className="nav__dropdown">
                    <a href="#" className="nav__link">
                      <i className="bx bx-bell nav__icon"></i>
                      <span className="nav__name">MaestroUsuarios</span>
                      <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                    </a>

                    <div className="nav__dropdown-collapse">
                      <div className="nav__dropdown-content">
                        <a href="#" className="nav__dropdown-item">
                          Blocked
                        </a>
                        <a href="#" className="nav__dropdown-item">
                          Silenced
                        </a>
                        <a href="#" className="nav__dropdown-item">
                          Publish
                        </a>
                        <a href="#" className="nav__dropdown-item">
                          Program
                        </a>
                      </div>
                    </div>
                    </div>*/}

                    <Link to='/MasterUser' className='nav__link'>
                      <i className='fas fa-chess-king nav__icon'></i>
                      <span className='nav__name'>MaestroUsuarios</span>
                    </Link>
                    {/*<a href="#" className="nav__link">
                    <i className="bx bx-bookmark nav__icon"></i>
                    <span className="nav__name">Saved</span>
                  </a>*/}
                  </div>
                </div>
              </div>

            <Link to="/Login" class="nav__link nav__logout">
            <i class="bx bx-log-out nav__icon"> </i>
              <span class="nav__name"><button className="button-logout" onClick={()=>{logout({returnTo: window.location.origin})}}>Log Out</button></span>
            </Link>
          </nav>
        </div>
        <>
        {children}
        </>

          {/*<div className="contenedor-principal">{children}</div> */}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Layout;
