import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import user from '../assets/static/user.svg';

function Header() {
  return (
    <header className='header'>
      <img className='header__img' src={logo} alt='platzi' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={user} alt='User' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to='/'>Cuenta</Link></li>
          <li><Link to='/login'>Cerrar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
