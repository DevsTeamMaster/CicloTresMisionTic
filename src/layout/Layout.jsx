import React, { Children } from "react";
import imagenUsuario from "media/perfil.jpg";
import { Link } from "react-router-dom";
import "styles/sales.scss";
//import Navbar from 'components/Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="body">
        <header class="header">
          <div class="header__container">
            <img src={imagenUsuario} alt="" class="header__img" />

            <Link class="header__logo">DevsTeamMaster</Link>

            <div class="header__search">
              <input type="search" placeholder="Search" class="header__input" />
              <i class="bx bx-search header__icon"></i>
            </div>

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

              <div class="nav__list">
                <div class="nav__items">
                  <h3 class="nav__subtitle">Profile</h3>

                  <a href="#" class="nav__link active">
                    <i class="bx bx-home nav__icon"></i>
                    <span class="nav__name">Home</span>
                  </a>

                  <div class="nav__dropdown">
                    <a href="#" class="nav__link">
                      <i class="bx bx-user nav__icon"></i>
                      <span class="nav__name">Profile</span>
                      <i class="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                    </a>

                    <div class="nav__dropdown-collapse">
                      <div class="nav__dropdown-content">
                        <a href="#" class="nav__dropdown-item">
                          Passwords
                        </a>
                        <a href="#" class="nav__dropdown-item">
                          Mail
                        </a>
                        <a href="#" class="nav__dropdown-item">
                          Accounts
                        </a>
                      </div>
                    </div>
                  </div>

                  <a href="#" class="nav__link">
                    <i class="bx bx-message-rounded nav__icon"></i>
                    <span class="nav__name">Messages</span>
                  </a>
                </div>

                <div class="nav__items">
                  <h3 class="nav__subtitle">Menu</h3>

                  <div class="nav__dropdown">
                    <a href="#" class="nav__link">
                      <i class="bx bx-bell nav__icon"></i>
                      <span class="nav__name">Notifications</span>
                      <i class="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                    </a>

                    <div class="nav__dropdown-collapse">
                      <div class="nav__dropdown-content">
                        <a href="#" class="nav__dropdown-item">
                          Blocked
                        </a>
                        <a href="#" class="nav__dropdown-item">
                          Silenced
                        </a>
                        <a href="#" class="nav__dropdown-item">
                          Publish
                        </a>
                        <a href="#" class="nav__dropdown-item">
                          Program
                        </a>
                      </div>
                    </div>
                  </div>

                  <a href="#" class="nav__link">
                    <i class="bx bx-compass nav__icon"></i>
                    <span class="nav__name">Explore</span>
                  </a>
                  <a href="#" class="nav__link">
                    <i class="bx bx-bookmark nav__icon"></i>
                    <span class="nav__name">Saved</span>
                  </a>
                </div>
              </div>
            </div>

            <a href="#" class="nav__link nav__logout">
              <i class="bx bx-log-out nav__icon"></i>
              <span class="nav__name">Log Out</span>
            </a>
          </nav>
        </div>
        <>
        {children}
        </>

        {/*<div className="contenedor-principal">{children}</div> */}
      </div>
    </div>
  );
};

export default Layout;