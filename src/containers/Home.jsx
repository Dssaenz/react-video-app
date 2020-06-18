import React from 'react';
import { connect } from 'react-redux';
import {
  Search,
  Categories,
  Carousel,
  ItemCarousel,
} from '../components';

import '../assets/styles/App.scss';

function Home({ mylist, trends, originals }) {
  return (
    <>
      <Search />
      {mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {mylist?.map((item) => (
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
          {trends.map((item) => (
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
          {originals.map((item) => (
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

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
