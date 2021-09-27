import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*const showMenu = (headerToggle, navbarId) =>{
  const toggleBtn = document.getElementById(headerToggle),
  nav = document.getElementById(navbarId)
  
  // Validate that variables exist
  if(headerToggle && navbarId){
      toggleBtn.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
          // change icon
          toggleBtn.classList.toggle('bx-x')
      })
  }
}
showMenu('header-toggle','navbar')


const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
