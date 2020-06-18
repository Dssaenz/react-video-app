import React from 'react';
import '../assets/styles/components/NotFound.scss';

function NotFound() {
  return (
    <section className='error'>
      <div className='error__container'>
        <h2 className='animated pulse'>404</h2>
        <p>Página no encontrada</p>
      </div>
    </section>
  );
}

export default NotFound;
