import React from 'react'
import imagenUsuario from 'media/perfil.jpg'
import { Link } from 'react-router-dom';
import 'styles/sales.scss'

const sales = () => {
    return (
        <div>
        <div className="body">     
         <header className="header">
        <div class="header__container">
            <img src={imagenUsuario} alt="" className="header__img"/>

            <Link className="header__logo">DevsTeamMaster</Link>

            <div class="header__search">
                <input type="search" placeholder="Search" className="header__input"/>
                <i className='bx bx-search header__icon'></i>
            </div>

            <div className="header__toggle">
                <i className='bx bx-menu' id="header-toggle"></i>
            </div>
        </div>
    </header>

    <div className="nav" id="navbar">
        <nav class="nav__container">
            <div>
                <a href="#" className="nav__link nav__logo">
                    <i className="fab fa-github-alt  nav__icon"></i>
                    <span className="nav__logo-name">MisionTic2021</span>
                </a>

                <div className="nav__list">
                    <div className="nav__items">
                        <h3 className="nav__subtitle">Profile</h3>

                        <a href="#" className="nav__link active">
                            <i className='bx bx-home nav__icon' ></i>
                            <span className="nav__name">Home</span>
                        </a>
                        
                        <div class="nav__dropdown">
                            <a href="#" class="nav__link">
                                <i class='bx bx-user nav__icon' ></i>
                                <span class="nav__name">Profile</span>
                                <i class='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                            </a>

                            <div class="nav__dropdown-collapse">
                                <div class="nav__dropdown-content">
                                    <a href="#" class="nav__dropdown-item">Passwords</a>
                                    <a href="#" class="nav__dropdown-item">Mail</a>
                                    <a href="#" class="nav__dropdown-item">Accounts</a>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="nav__link">
                            <i className='bx bx-message-rounded nav__icon' ></i>
                            <span className="nav__name">Messages</span>
                        </a>
                    </div>

                    <div className="nav__items">
                        <h3 className="nav__subtitle">Menu</h3>

                        <div className="nav__dropdown">
                            <a href="#" className="nav__link">
                                <i className='bx bx-bell nav__icon' ></i>
                                <span className="nav__name">Notifications</span>
                                <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                            </a>

                            <div className="nav__dropdown-collapse">
                                <div className="nav__dropdown-content">
                                    <a href="#" className="nav__dropdown-item">Blocked</a>
                                    <a href="#" className="nav__dropdown-item">Silenced</a>
                                    <a href="#" className="nav__dropdown-item">Publish</a>
                                    <a href="#" className="nav__dropdown-item">Program</a>
                                </div>
                            </div>

                        </div>

                        <a href="#" className="nav__link">
                            <i class='bx bx-compass nav__icon' ></i>
                            <span className="nav__name">Explore</span>
                        </a>
                        <a href="#" className="nav__link">
                            <i class='bx bx-bookmark nav__icon' ></i>
                            <span className="nav__name">Saved</span>
                        </a>
                    </div>
                </div>
            </div>

            <a href="#" className="nav__link nav__logout">
                <i class='bx bx-log-out nav__icon' ></i>
                <span class="nav__name">Log Out</span>
            </a>
        </nav>
    </div>
        <div className="contenedor-principal">
            
        </div> 
    </div>
</div>
    )
}

export default sales
