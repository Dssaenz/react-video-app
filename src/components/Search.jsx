import React from 'react';
import '../assets/styles/components/Search.scss';

function Search() {
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input aria-label='Buscar...' className='input' type='text' placeholder='Buscar...' />
    </section>
  );
}

export default Search;
