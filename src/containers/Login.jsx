/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import facebook from '../assets/static/facebook.svg';
import instagram from '../assets/static/instagram.svg';

function Login() {
  return (
    <section className='login'>
      <section className='login__container'>
        <h2 className='login__container--title'>Iniciar Sesión</h2>
        <form className='login__container--form'>
          <input aria-label='Correo' className='input' type='text' placeholder='Correo' />
          <input aria-label='Contraseña' className='input' type='password' placeholder='Contraseña' />
          <button className='button'>Iniciar sesión</button>
          <div className='login__container--remember'>
            <label>
              <input type='checkbox' />
              Recúerdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={facebook} alt='Facebook' />
            <a href='https://www.facebook.com/'>Inicia sesión con Facebook</a>
          </div>
          <div>
            <img src={instagram} alt='Instagram' />
            <a href='https://www.instagram.com/'>Inicia sesión con Instagram</a>
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
