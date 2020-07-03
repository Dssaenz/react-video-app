import React from 'react';
import { connect } from 'react-redux';
import { getVideoSearch } from '../actions';
import '../assets/styles/components/Search.scss';

function Search(props) {
  function handleInput(event) {
    props.getVideoSearch(event.target.value);
  };
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        aria-label='Buscar...'
        className='input__home'
        type='text'
        onKeyUp={handleInput}
        placeholder='Buscar...'
      />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  getVideoSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
