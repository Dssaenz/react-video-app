/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import {
  Search,
  Categories,
  Carousel,
  ItemCarousel,
} from '../components';

import '../assets/styles/app.scss';

function Home({ mylist, trends, originals, searchResult }) {
  return (
    <>
      <Search />
      {
        Object.keys(searchResult).length > 0 &&
        (
          <Categories title='Resultados de la busqueda...'>
            <Carousel>
              {searchResult.map((item) => (
                <ItemCarousel
                  key={item.id}
                  {...item}
                />
              ))}
            </Carousel>
          </Categories>
        )
      }
      {mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {mylist.map((item) => (
              <ItemCarousel
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => (
            <ItemCarousel
              key={item.id}
              {...item}
            />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          {originals.map((item) => (
            <ItemCarousel
              key={item.id}
              {...item}
            />
          ))}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    searchResult: state.searchResult,
  };
};

export default connect(mapStateToProps, null)(Home);
