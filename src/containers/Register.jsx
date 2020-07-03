import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

function Register(props) {
  const [form, handleForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleInput(event) {
    handleForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
    console.log(form);
  }
  return (
    <section className='register'>
      <section className='register__container'>
        <h2 className='register__container--title'>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            aria-label='Nombre'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            aria-label='Correo'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            aria-label='Contraseña'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <p className='register__text'><Link to='/login'>Iniciar sesión</Link></p>
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
