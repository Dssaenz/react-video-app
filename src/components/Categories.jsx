import React from 'react';
import '../assets/styles/components/Categories.scss';

function Categories({ children, title }) {
  return (
    <div className='categories'>
      <h2 className='categories__title'>{title}</h2>
      {children}
    </div>
  );
}

export default Categories;
