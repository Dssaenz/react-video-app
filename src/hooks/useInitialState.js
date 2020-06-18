import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [video, setMovies] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return video;
};

export default useInitialState;
