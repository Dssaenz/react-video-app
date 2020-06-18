import React from 'react';

import {
  Search,
  Categories,
  Carousel,
  ItemCarousel,
} from '../components';

import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

function Home() {
  const initialState = useInitialState(API);
  console.log(initialState, 'el stado');
  return (
    <>
      <Search />
      {initialState.mylist?.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {initialState.mylist?.map((item) => (
              <ItemCarousel
                key={item.id}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
                cover={item.cover}
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends?.map((item) => (
            <ItemCarousel
              key={item.id}
              title={item.title}
              year={item.year}
              contentRating={item.contentRating}
              duration={item.duration}
              cover={item.cover}
            />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          {initialState.originals?.map((item) => (
            <ItemCarousel
              key={item.id}
              title={item.title}
              year={item.year}
              contentRating={item.contentRating}
              duration={item.duration}
              cover={item.cover}
            />
          ))}
        </Carousel>
      </Categories>
    </>
  );
}

export default Home;
