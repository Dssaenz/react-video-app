import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo.png';
import userLogo from '../assets/static/user.svg';

function Header({ user }) {
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className='header'>
      <img className='header__img' src={logo} alt='platzi' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userLogo} alt='User' />}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
