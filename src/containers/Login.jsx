/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import facebook from '../assets/static/facebook.svg';
import instagram from '../assets/static/instagram.svg';

function Login(props) {
  const [form, handleForm] = useState({
    email: '',
  });

  function handleInput(event) {
    handleForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2 className='login__container--title'>Iniciar Sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            aria-label='Correo'
            onChange={handleInput}
            className='input'
            type='text'
            placeholder='Correo'
            name='email'
          />
          <input
            aria-label='Contraseña'
            onChange={handleInput}
            className='input'
            type='password'
            placeholder='Contraseña'
            name='password'
          />
          <button className='button' type='submit'>Iniciar sesión</button>
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
          {' '}
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
