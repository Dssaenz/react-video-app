import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo.png';
import userLogo from '../assets/static/user.svg';

function Header(props) {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  function handleLogout() {
    props.logoutRequest({});
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? <img src={gravatar(user.email)} alt={user.email} /> : <img src={userLogo} alt='Usuario' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? <li><a href='/'>{user.name}</a></li> : null}
          {hasUser ? <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> : <li><Link to='login'>Iniciar Sesión</Link></li>}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
